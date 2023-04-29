## Objective

This is the frontend part of the application, it is responsible 
for requesting JWT from the backend. It can use the JWT as following:

1. Decode Encoded Data from the JWT and obtain the data.
2. Use the JWT token to make requests to the backend. The backend will then check the following:
    - If the JWT token has been tampered/modified? If yes it knows that the signature has changed and it will declare it invalid.
    - If it's valid it will check if it has expired or not. If expired the user can create a new token and use it for future requests.
  

## Concepts Covered
- How to work with JWT tokens received from Backend
- How to create Custom Switch Using TailwindCSS
- How to use useContext API and switch theme mode 
- Learned about `break-all` tag to wrap long URLS and continous texts into next line.
  
  
## Dependencies

- axios: Make HTTP requests to backend
- jwt-decode: Decode JWT token received from the backend
- moment: Decipher the expiry date in human readable format

> Created using Vite, UI powered by TailwindCSS