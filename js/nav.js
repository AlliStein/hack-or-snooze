"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

function navMyStories(evt) {
  console.debug("navMyStories", evt);
  hidePageComponents();
  userStoriesAddedToList();
  $userStories.show();
}

$body.on("click", "#nav-user-stories", navMyStories);


/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

/** Show story submit form on clicking story "submit" */

function navSubmitStory(evt) {
  console.debug("navSubmitStory", evt);
  hidePageComponents();
  $allStoriesList.show();
  $submitForm.show();
}

$navSubmit.on("click", navSubmitStory);

/** Show story submit form on clicking story "submit" */

function navSubmitStoryClick(evt) {
  console.debug("navSubmitStoryClick", evt);
  hidePageComponents();
  $allStoriesList.show();
  $submitForm.show();
}

$navSubmit.on("click", navSubmitStoryClick);

/** Show favorite stories on click on "favorites" */

function navFavoritesClick(evt) {
  console.debug("navFavoritesClick", evt);
  hidePageComponents();
  putFavoritesListOnPage();
}

$body.on("click", "#nav-favs", navFavoritesClick);
