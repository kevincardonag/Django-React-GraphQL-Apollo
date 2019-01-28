import graphene
from simple_app.schema import Query as SimpleAppQuery
from simple_app.schema import Mutation as SimpleAppMutation

class Queries(SimpleAppQuery, graphene.ObjectType):
    """ Schema for messages """

    dummy = graphene.String()


class Mutations(SimpleAppMutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Queries, mutation=Mutations)
