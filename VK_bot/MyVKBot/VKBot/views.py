from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
import json
import vk
import random


vk_api = vk.API('')

@csrf_exempt
def init(request):
	body = json.loads(request.body)
	if body == { "type": "confirmation", "group_id": 223186903}:
		return HttpResponse("16be989e")

@csrf_exempt
def index(request):
	body = json.loads(request.body)
	print(body)
	if body["type"] == 'message_new':
		user_id = body["object"]["message"]["from_id"] 
		if body["object"]["message"]["text"] == "Привет":
			print('ya tut')
			messages = "И тебе привет!"
			vk_api.messages.send(user_id=user_id, message=messages, random_id=random.randint(1,50000000000000000000000) ,v=5.131)
	return HttpResponse("ok")
