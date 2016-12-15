Base commit: https://github.com/AngularClass/extensis-angular2/commit/bb5a80c12685ecb8d804a33bf1ca2a3e118fc96b

A lot of changes have been made to the original repo. Here are all the changes that have been made and where they can be found. Further commentary, if any, will be denoted with a * before the file name.

If you have any questions or concerns email me at andrew@angularclass.com

Changelist:

### Routing
- Refactor routes away from main.browser.ts
- Routes are now imported through their respective modules
  >  any '-routes.module.ts' file is a routing module
  >  Routing modules go hand-in-hand with domain driven organization
  >  Implements forChild, see *app.module for description.
- Add CanActivate and CanDeactivate
  > */litter/litter-routes.module
  > */litter/litter.service
- Add a 404 component
  > */app.module
- Add an account management route to migrate or build the account management app in.
  > */account-management/account-shared/account-shared.module.ts

### Components
- Add a kitten upvote component to demonstrate custom inputs.
  > */kitten-generator/kitten-upvote.component
- Add a Nav Bar component
  > */navbar/navbar.component.ts