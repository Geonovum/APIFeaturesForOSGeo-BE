version = '1.2.3'
mountPath = "amstelveen"

title = 'OSGeoBE'
description = 'Build your own spatial service at OSGeoBE'

port = 80

limit = process.env.LIMIT || 1000

encodings = ['application/geo+json', 'application/json', 'text/html']
