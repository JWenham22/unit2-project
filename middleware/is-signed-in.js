function isSignedIn(req, res, next){
	// check to see if the user is in the cookie, if it is pass the the request to the next middleware function/endpoint
	if(req.session.user) return next();
	// otherwise redirect the user to sign in
	res.redirect('/auth/sign-in')
}

module.exports = isSignedIn;