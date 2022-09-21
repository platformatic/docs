---
sidebar_position: 1
---

# Introduction

Authorization in Platformatic DB is **role-based** (see [Roles And User Information](#roles-and-user-information) for further details). 
A user is supposed to have a list of roles associated.  
Platformatic delegates authentication and assignment of the `roles` to an external _authentication service_.
The job of the authentication service is to authenticate users and assign their roles correctly.  
Supported authentication service integrations are:
- JWT
- Webhook

We refer to the user roles and other informations (like `userId`) as [User Metadata](#user-metadata).

To make testing and developing easier, it's possible to bypass these checks if a `adminSecret` is set. See [HTTP Headers](#http-headers).

## JWT
JWT is built on top of [fastify-jwt](https://github.com/fastify/fastify-jwt).  

![Platformatic DB JWT integration](./images/jwt.png)

To configure it, the simplest way is to pass a `secret`, e.g.:

```json
  "authorization": {
    ...

    "jwt": {
      "secret": "<shared-secret>"
    },
    
    ...
  }
```

For more complex configurations, please check [fastify-jwt options](https://github.com/fastify/fastify-jwt#options). 

## Webhook
Platformatic can use a webhook to authenticate the requests. 

![Platformatic DB Webhook integration](./images/webhook.png)

In this case, the URL is configured on authorization:

```json
  "authorization": {
    ...

    "webhook": {
      "url": "<webhook url>"
    },
    
    ...
  }
````

When a request is received, Platformatic sends a `POST` to the webhook, replicating the same body and headers, except for:
- `host`
- `connection`

In the Webhook case, the HTTP response contains the roles/user information as HTTP headers. 

## HTTP Headers

To make testing and developing easier, it's possible to bypass JWT / WebHook integration if a `adminSecret` is set.
If so, and if a request has `X-PLATFORMATIC-ADMIN-SECRET` HTTP header set with the configured `adminSecret`, the JWT/Webhook authentication is skipped, and 
the role set automatically as `platformatic-admin`.


![Platformatic DB JWT integration](./images/http.png)

Note that setting user roles on HTTP headers is highly insecure and should be used only within protected networks.

### Impersonation
If a user is recognized with a `platformatic-admin` role, can also **impersonate users**.
The users/roles to impersonate are specified by:
- `X-PLATFORMATIC-USER-ID`: the `userId` of the authenticated user. Note that this key value is conventional, any key can be used as long that is the same key specified in authorization rules.
- `X-PLATFORMATIC-ROLE`: comma separated list of roles 

## User Metadata
In all cases, the roles/user information is passed to Platformatic from the external _authentication service_ as a string (JWT claims or HTTP headers). 
We can refer to these as **user metadata**. Platformatic saves the user metadata for each request in a `user` object. 
Roles can be set using `X-PLATFORMATIC-ROLE` as list of comma-separated roles (this key is configurable, see [References](../configuration.md#role-and-anonymous-keys)).

Note that roles are simply strings, but some "special roles" are reserved:
- `platformatic-admin` : this identifies a user who has admin powers
- `anonymous`: set automatically when no roles are associated


