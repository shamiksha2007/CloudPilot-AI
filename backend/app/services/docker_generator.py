def generate_dockerfile(analysis):

    language = analysis["language"]


    if language == "Python":

        dockerfile = """
FROM python:3.12

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD ["python", "main.py"]
"""


    elif language == "JavaScript/TypeScript":

        dockerfile = """
FROM node:20

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
"""


    else:

        dockerfile = """
# Unable to detect project language
"""


    return dockerfile