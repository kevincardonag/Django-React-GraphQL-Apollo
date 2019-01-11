import graphene


class Queries(graphene.Schema):
    """ Schema for messages """

    message = graphene.String()


schema = graphene.Schema(query=Queries)

