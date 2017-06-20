# Component Hierarchy

### HomeContainer
  - WelcomeBanner
  - Genre
  - Featured
  - ShowFeed
  - Aside

### LoggedInHomeContainer
  - InnerHeader
  - ShowFeed
  - Aside

### AuthFormModalContainer
  - AuthForm

### HeaderNavContainer
  - Search
  - UserDropDown

### FooterPlayerContainer
  - Player
  - PlayerCue
    - PlayerCueItem

### UserProfileContainer
  - ShowFeed
    - ShowFeedItem

### UploadShowContainer
  - UploadShowForm

### ShowViewContainer
  - ShowViewPlayer
  - ShowAbout
  - CommentsForm
  - CommentsFeed
    - Comment

### ShowFeedContainer
  - ShowFeed
    - ShowFeedItem

### SearchContainer
  - Search

### TagResultsContainer
  - TagIndex
    - TagIndexItem

### ShowResultsContainer
  - ShowResultIndex
    - ShowResultIndexItem

### UserResultsContainer
  - UserIndex
    - UserIndexItem


## Routes

|Path   | Component   |
|-------|-------------|
| "/"   |  "HomeContainer"  |
| "/signup" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/userName" | "UserProfileContainer" |
| "/authorName/showTitle" | "ShowViewContainer" |
| "/search" | "SearchContainer" |
| "/upload" | "UploadShowContainer" |
