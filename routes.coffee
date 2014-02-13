Router.map ->
  @route 'home',
    path: '/'

  @route 'dashboard',
    path: '/dashboard'

  @route 'newList',
    path: '/dashboard/new'

  @route 'listPage',
    path: '/dashboard/:_id'
    data: ->
      Lists.findOne this.params._id
    before: ->
      Meteor.subscribe 'items', this.params._id

  @route 'notFound',
    path: '*'
    where: 'server'
    action: ->
      @response.statusCode = 404
      @response.end Handlebars.templates['404']()

mustBeSignedIn = ->
  unless Meteor.user()
    @render "home"
    @stop()
  return

Router.before mustBeSignedIn,
  except: [
    "home"
    "entrySignIn"
    "entrySignUp"
    "entryForgotPassword"
    "entryResetPassword"
  ]
