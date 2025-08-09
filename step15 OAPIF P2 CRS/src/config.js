version = '1.2.3'
mountPath = "amstelveen"

title = 'WHY2025'
description = 'Build your own spatial service at WHY2025'

port = 80

limit = process.env.LIMIT || 1000

encodings = ['application/geo+json', 'application/json', 'text/html']
