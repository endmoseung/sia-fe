# π κΉμΉλͺ¨ SIA κ΅¬ν κ³Όμ 

## κ³Όμ  μκ°
- λͺ©ν : μ΄λ―Έμ§λ₯Ό λ‘λνκ³ , μ΄λ―Έμ§ μμ λ°μ€ λΌλ²¨μ μμ±νλ μΉ ν΄λΌμ΄μΈνΈλ₯Ό μμ±νμΈμ.
- μμκΈ°κ° : 2022.10.17 ~ 2022.10.19

<br/>

## κ΅¬ν μμ

https://user-images.githubusercontent.com/103626175/196710529-bddb7fe9-0960-4913-a9b1-fe9c48c64789.mp4

<br/>



## ν΄λ κ΅¬μ‘°

```
root
βββ .env
βββ package-lock.json
βββ package.json
βββ public
|   βββ favicon.ico
|   βββ index.html
βββ src
    βββ apis
    βββ components
    βββ pages
    βββ routes
    βββ reocil
    βββ styles
    βββ constant
    βββ App.tsx
    βββ index.ts
```

| ν΄λ       | κ΅¬λΆ                                    |
| :--------- | :-------------------------------------- |
| apis       | apiν¨μλ€μ λͺ¨μλ ν΄λ                 |
| constant   | μμλ€μ λͺ¨μλ ν΄λ    |
| components | μ½λ μ¬μ¬μ©μ μν μ»΄ν¬λνΈ κ΄λ¦¬ν ν΄λ |
| pages      | urlμ£Όμμ λ°λ₯Έ νμ΄μ§ κ΅¬μ± ν΄λ         |
| routes     | λΌμ°ν κ΄λ ¨ μ²λ¦¬ ν΄λ                   |
| recoil     | recoilλ₯Ό νμ©ν ν΄λ                     |
| styles     | μ μ­μΌλ‘ μ¬μ©νλ style κ΄λ¦¬ ν΄λ       |

<br/>

## κΈ°μ  μ€ν

![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)  
![Recoil](https://img.shields.io/badge/Recoil-007af4.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FscXVlXzEiIGRhdGEtbmFtZT0iQ2FscXVlIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI1NS4yMSA2MjMuOTEiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp3aGl0ZX08L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im03NC42MiAyNzcuNDYgMS4yNC0uMTMgMzQuNzgtMy4yOC01My40Ny01OC42NkE5Ni40NyA5Ni40NyAwIDAgMSAzMiAxNTAuM0gzYTEyNS4zIDEyNS4zIDAgMCAwIDMyLjggODQuNTdaTTE3Ny4xMyAzNDdsLTM2IDMuNCA1My4zMiA1OC41MUE5Ni40MSA5Ni40MSAwIDAgMSAyMTkuNjMgNDc0aDI4LjkyYTEyNS4yOCAxMjUuMjggMCAwIDAtMzIuNzYtODQuNTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjUzLjY5IDIzMS42OGMtNi4zMy0zMS4zLTMwLjg5LTU0LjA5LTYyLjU3LTU4LjA3bC02LjM1LS43OWE0OS42MSA0OS42MSAwIDAgMS00My4zNS00OS4xM3YtMjBhNTIuNzUgNTIuNzUgMCAxIDAtMjguOTEtLjM2djIwLjM4YTc4LjU2IDc4LjU2IDAgMCAwIDY4LjY1IDc3LjgybDYuMzYuOGMyMy4yNCAyLjkyIDM0Ljc4IDIwIDM3LjgzIDM1LjFzLS45MyAzNS4zMi0yMS4yMiA0N2E3My44MSA3My44MSAwIDAgMS0zMC4wNiA5LjYybC05NS42NiA5YTEwMi40NSAxMDIuNDUgMCAwIDAtNDEuOCAxMy4zOEM5IDMzMi40NS00LjgxIDM2MyAxLjUyIDM5NC4yOXMzMC44OSA1NC4wOCA2Mi41NyA1OC4wNmw2LjM1LjhhNDkuNiA0OS42IDAgMCAxIDQzLjM1IDQ5LjEydjE4YTUyLjc1IDUyLjc1IDAgMSAwIDI4LjkxLjI2di0xOC4yNmE3OC41NSA3OC41NSAwIDAgMC02OC42NS03Ny44MWwtNi4zNi0uOGMtMjMuMjQtMi45Mi0zNC43OC0yMC4wNS0zNy44My0zNS4xMXMuOTMtMzUuMzIgMjEuMjItNDdhNzMuNjggNzMuNjggMCAwIDEgMzAuMDYtOS42M2w5NS42Ni05YTEwMi40NSAxMDIuNDUgMCAwIDAgNDEuOC0xMy4zOGMyNy42NS0xNi4wMiA0MS40LTQ2LjU0IDM1LjA5LTc3Ljg2WiIvPjwvc3ZnPg==&logoColor=white)  
![axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white) 
![styled-components](https://img.shields.io/badge/styledcomponents-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white)
