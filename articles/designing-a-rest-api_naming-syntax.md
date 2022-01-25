---
title: "Designing a REST API: Naming syntax"
description: Get some great takeaways on how to design a REST API that is easy to expand, document and use.
series: true
tags:
    - softwarearchitecture
    - simplicity
thumbnail: /assets/images/blog/api.jpg
---

## Introduction

This article is the first in a series of some great takeaways on how to craft a well-designed REST API. As 
you read through the articles you will learn how to form an API in a way that is easy to expand, document and use.

The articles will not cover implementation details(eg. no code samples) but any suggestions given here will be possible 
to implement in any proper framework like Spring Boot, .Net Core MVC, NestJS and others.

Also, these series will only cover JSON as the envelope for data. REST API's can however use any data format they like, but it is outside of the scope for this series. The things you can expect to get from these articles are related to REST API's with JSON as the data format and will cover these subjects:

1. Naming conventions (This article)
2. Recognizable design patterns (Future article)
3. Idempotency (Future article)
4. Paging and sorting (Future article)
5. Searching (Future article)
6. Patching (Future article)
7. Versioning (Future article)
8. Authentication (Future article)
9. Documentation (Future article)

Thats the overview. Let's get started looking at the naming conventions and lets start with Name Casing Conventions.

## Name Casing Conventions
The first we will cover is the use of casing when designing your REST API. As your probably know there are quite a few common casing conventions around, some of which are:

* PascalCase
* camelCase
* snake_case

More than these exists, but these are the ones most common in REST APIs. For example you will see that [Stripe](https://stripe.com/docs/api) uses snake_case and Amazon uses multiple conventions fx. [PascalCase](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchExecuteStatement.html) and [camelCase](https://docs.aws.amazon.com/apigateway/api-reference/resource/account/). As you traverse the many fine REST API's out there to find inspiration, you will see that there is no de facto standard for which naming convention to use.

However - I must emphasize that **camelCase does offer some benefits** for API's that are meant to be used directly in a browser application (or other Javascript clients), because it is the same casing that is [standard in Javascript](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript#variable_naming). That means if the REST API uses camelCase in its JSON, then when that JSON is parsed by Javascript the object fields will have the casing that fits.

**Example:**

Imagine the following is the data received from the server.
```Json
{
    "id": "anim-j95dcnjf3fjcde8nv",
    "type": "Cat",
    "name": "Garfield",
    "needsFood": true
}
```

Then in the client code, using this can be as simple as:
```Javascript
fetch('https://myshop.com/animals/anim-j95dcnjf3fjcde8nv')
  .then(response => response.json())
  .then(animal => console.log(`${animal.name} needs food: ${animal.needsFood}`));
```

Using camelCase ensures that the fields on the object does not need to be translated into another case when parsed in Javascript. They will immediately be in the correct case when parsed to Javascript objects. That said, converting the case when parsing the JSON is also possible and often done if the REST API uses another case, but it is just more work on the client side.


## Plural or Singular
Another question that often arises is whether to use plural og singular naming for the resources in the Urls, fx. `animals` or `animal` (Reflected in the Url as either `https://myshop.com/animals` or `https://myshop.com/animal`). It may look like a superfluous thing to consider, but in reality taking the right descision makes the API simpler to navigate.

### Why some prefer singular naming
Some prefer the singular model here. They may argue that the Entity is a class called `Animal` in the backend which is singular. Therefore the resource should also use a singular naming of the resource, they say. The name of the resource thereby defines the type of data in the resource. That sounds like a legid reason - but in fact it is not.

### Why plural naming is almost always correct
According to [the definition of REST on Wikipedia](https://en.wikipedia.org/wiki/Representational_state_transfer), a resource "encapsulate entities (e.g. files)". So the name of the resource is not the data type. It is the name of the container of entities - which usually is of the same type. Imagine for a second how you would write a piece of code that defines a "container" of entities.

```Java
// Using plural would be the correect naming 
var animals = new ArrayList<Animal>();
animals.add(new Animal());

// Using singular would not
var animal = new ArrayList<Animal>();
animal.add(new Animal());
```

You can look at the resource the same way. It is a container of entities just like Arrays, Lists etc. and should be named as such. If will also ensure that the implementation in the client can reflect the resource names in its integration with the API. Consider this simplified integration as an example:

```Javascript
class MyShopClient {
    animals() {
        return ...;
    }
}

var myshop = new MyshopClient();
myshop.animals.findAll(); // Request to https://myshop.com/animals
```

Notice that the naming naturally reflects the naming of the resources on the server. Recognizable patterns like this makes it easy for developers to figure out how to navigate the API.


## Recognizability
Ensuring that naming and patterns are easy to recognize should be considered a quality of the API implementation. For example using different name casing conventions or unnatural naming of resources makes it harder for the user of your API to figure out how to use it. But there are more you can do to ensure the quality of your API.

Follow along in this series as we cover multiple aspects of how to craft a REST API that is easy to expand, document and use. In the next article we will go in to depth with how to ensure Recognizable design patterns in your API.

