# Nginx auth_request Minimalist Example

## Problem

You want to use Nginx to proxy to a protected app / service, and you have some kind of external authentication system.

Usual solutions involve:

* Locking down via IP address
* Adding Basic Auth

However, if you already have an existing authentication system, this repo gives an example of how you can use nginx to hook into it.

## How to run

```
docker-compose up
```

If you hit http://localhost:8000, you will see by default you will receive a 403 Forbidden

I've made a basic auth backend which looks for the presence of an `X-Juddling` header, and then it will allow you to proxy through to the protected content.

```
http http://localhost:8000 X-Juddling:1
```

You'll get a 200 back and have acess to the shared content 🎉