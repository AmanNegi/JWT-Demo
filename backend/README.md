## Objective
This is the backend part of the application, it is responsible 
for creating JWT using the secret key mentioned in `.env` file. It sets a expiry and returns the newly created JWT whenever user logs in. 

### How to change expiry?
When we use the `sign` method we can simply pass additional parameters. One of which is `expiresIn`
```js
  jwt.sign(user, process.env.JWT_SECRET_KEY, { expiresIn: "5s" });
```

> Eg: 60, "2 days", "10h", "7d", "5s" , "5m". A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units (days, hours, etc), otherwise milliseconds unit is used by default ("120" is equal to "120ms"). Learn more about specifying the time in `expiresIn` [here](https://github.com/vercel/ms).


## Dependencies
- [Express](https://www.npmjs.com/package/express)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)