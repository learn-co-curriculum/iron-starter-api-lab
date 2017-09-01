# Iron Starter API Lab

## Objectives

* Complete The Iron Starter API Endpoints
* Create nested resources routes for comments
* Render reponses in JSON for created resources

## Introduction 

In this lab, we're going to finish up our Iron Starter API. In the previous lessons we built out the resources routes for Campaigns and have routes that look like this:

```ruby
POST   /api/campaigns     
GET    /api/campaigns/:id
PATCH  /api/campaigns/:id
PUT    /api/campaigns/:id
DELETE /api/campaigns/:id
```

We need to add routes for comments though, that are a nested resource of campaings. The new routes should look like this:

```ruby 
GET    /api/campaigns/:campaign_id/comments     
POST   /api/campaigns/:campaign_id/comments    
GET    /api/campaigns/:campaign_id/comments/:id 
PATCH  /api/campaigns/:campaign_id/comments/:id
PUT    /api/campaigns/:campaign_id/comments/:id
DELETE /api/campaigns/:campaign_id/comments/:id
```

## Instructions

To prep the app

```bash 
cd api 
bundle install 
rails db:migrate 
``` 

We will now be able to run your tests command to run the test suite, but the tests will tell you there is a uninitialized constant Comment (NameError). We will need to build out this model. Check out the models/comment_spec.rb to see how to build this. This lab also contains the tests for the api/campaigns routes as well, but those should be passing and stay passing while adding the new feature.

Remember to follow the tests to guide your code.

## Summary 

Great Job on the Iron Starter API Lab! Now we have a fully realized API to finish our full stack app in the coming lessons and labs. 

<p class='util--hide'>View <a href='https://learn.co/lessons/iron-starter-api-lab'>Iron Starter API Lab</a> on Learn.co and start learning to code for free.</p>