FROM python:2.7
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD base/requirements.txt /code/requirements.txt
RUN pip install -r requirements.txt
ADD . /code/