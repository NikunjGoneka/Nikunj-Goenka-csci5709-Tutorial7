# Tutorial - 7

* Date Created: 10-03-2021
* Last Modification Date: 10-03-2021
* Website URL: https://csci-5709-tutorial7.herokuapp.com/user
* Repository URL: https://github.com/NikunjGoneka/Name-LName-csci5709-Tutorial7.git

## Authors
* [Nikunj Goenka](Nikunj.Goenka@dal.ca)

## URL List To view Backend funtionality

URL for list of all users (GET method)
* https://csci-5709-tutorial7.herokuapp.com/user

URL for specific user using path parameter (GET Method)
* https://csci-5709-tutorial7.herokuapp.com/user/specific/user3

URL add new user (POST Method)
* https://csci-5709-tutorial7.herokuapp.com/user/addUser

* BODY:
````
{
"user": {
	"username": "user6",
	"email": "email6@dal.ca"
    	}
}
````

URL update username (PUT Method)
* https://csci-5709-tutorial7.herokuapp.com/user/updateUser

* BODY:
````
{
"username": "user6",
"newUsername": "UpdatedUsername-6"
}
````
