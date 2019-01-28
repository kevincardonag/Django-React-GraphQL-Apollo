import json

import graphene
from django.contrib.auth.models import User
from graphene_django import DjangoObjectType
from graphql_relay import from_global_id

from simple_app.models import Message


class MessageType(DjangoObjectType):
    """ type for model Message """

    class Meta:
        model = Message
        interfaces = (graphene.Node,)


class Query(graphene.AbstractType):
    """ Abstract Query for model Message """

    all_messages = graphene.List(MessageType)
    message = graphene.Field(MessageType, id=graphene.ID())

    def resolve_all_messages(self, info, **kwargs):
        """ return all messages"""
        return Message.objects.all()

    def resolve_message(self, info, **kwargs):
        """ return a single object to Model Message """
        r_id = from_global_id(kwargs.get('id'))
        message = Message.objects.get(id=r_id[1])
        return message


class CreateMessageMutation(graphene.Mutation):
    """ Class for create messages"""

    class Arguments:
        message = graphene.String()

    status = graphene.Int()
    formErrors = graphene.String()
    message = graphene.Field(MessageType)

    @staticmethod
    def mutate(self, request, message):
        user = User.objects.get(pk=1)
        if not message:
            return CreateMessageMutation(
                status=400,
                formErrors=json.dumps(
                    {'message': ['Please enter a message.']}))
        obj_message = Message.objects.create(
            user=user, message=message
        )
        return CreateMessageMutation(status=200, message=obj_message)


class Mutation(graphene.AbstractType):
    create_message = CreateMessageMutation.Field()
