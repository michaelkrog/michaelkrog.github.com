---
title: "Designing a REST API: Recognizable design patterns"
description: Using Recognizable design patterns in your REST API helps developers adopt it more easily
series: true
tags:
    - softwarearchitecture
    - simplicity
thumbnail: /assets/images/blog/api.jpg
---

## Introduction

In [the first article](../designing-a-rest-api_naming-syntax) of this series we looked into the naming conventions used in REST API's. Using a fixed naming convention thats fits the audience is a great starter for your API. But more is need in order to build an API that is easy to use and maintain.

The sum of the elements we will look at over this series is this:

1. [Naming conventions](../designing-a-rest-api_naming-syntax)
2. Recognizable design patterns (This article)
3. Idempotency (Future article)
4. Paging and sorting (Future article)
5. Searching (Future article)
6. Patching (Future article)
7. Versioning (Future article)
8. Authentication (Future article)
9. Documentation (Future article)

But for now, let's get started looking at recognizable design patterns for your REST API. 

## Repository Pattern
The most used generic pattern for a REST API is the [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) repository pattern: **C**reate, **R**ead, **U**pdate, **D**elete.

You will find the CRUD repository pattern in every corner of software development and very much in relation to database persistency. When it comes to REST API's the pattern also elegantly fits here, although it is typical add **L**ist to the array of actions (which is sometimes referred to as CRUDL).

Check out the following overview that shows how each action of a CRUD pattern is mapped to an HTTP method on an API serving Cats. 


| Action | Http Method | Example                              |
|--------|-------------|--------------------------------------|
| Create | POST        | `POST https://myserver/cats`         |
| Read   | GET         | `GET https://myserver/cats/{id}`     |
| Update | PUT         | `PUT https://myserver/cats/{id}`     |
| Delete | DELETE      | `DELETE https://myserver/cats/{id}`  |
| List   | GET         | `GET https://myserver/cats`          |


This will cover all the basic needs of an API. You will be able to both persist as well as retrieve entities. In later articles we will even look into how you can do paging, sorting and searching on the List endpoint.

But what about the things that do not fit into a CRUD repository pattern? What if I need to make a request that potentially effects all the Cat entities of the API - like for example **Feed all the Cats**. For those situations we may need to introduce an *Actions pattern* that lays outside of the CRUD pattern, as described in the next section.

## Actions 
Describe the action pattern

## Child resources are an exception
Describe that child resources is a no go

### An exception to the rule
Explain when to make an exception



## Idempotency
Ensuring that naming and patterns are easy to recognize should be considered a quality of the API implementation. For example, using different name casing conventions or unnatural naming of resources makes it harder for the user of your API to figure out how to use it. But there is more you can do to ensure the quality of your API.

Follow along in this series as we cover multiple aspects of how to craft a REST API that is easy to expand, document, and use. In the next article, we will go into depth with how to ensure Recognizable design patterns in your API.

