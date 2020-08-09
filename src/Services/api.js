const baseUrl = 'http://localhost:3000'

const signinUrl = baseUrl + '/signin'
const validateUrl = baseUrl + '/validate'

const postReviewUrl = baseUrl + '/postReview'
const fetchReviewsUrl = baseUrl + '/fetchReviews'
const patchReviewUrl = baseUrl + '/comments'
const deleteReviewUrl = baseUrl + '/comments'

const patchNewsUrl = baseUrl + '/news'
const fetchNewsUrl = baseUrl + '/news'

const postPhotoUrl = baseUrl + '/postPhoto'


// Users //
export function signin (username, password) {
	return fetch(signinUrl, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }).then(resp => resp.json())
}

export function validate () {
    return fetch(validateUrl, {
	    headers: { 'Authorisation': localStorage.token }
    }).then(resp => resp.json())
}


// Reviews //
export function postReview (review, name, area, service, display) {
    return fetch(postReviewUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review, name, area, service, display })
    }).then(resp => resp.json())
}

export function fetchReviews () {
    return fetch(fetchReviewsUrl, {
    }).then(resp => resp.json())
}

export function patchReview (id, boolean) {
    return fetch(patchReviewUrl + '/' + id, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ display: boolean})
    })
}

export function deleteReview (id) {
    return fetch(deleteReviewUrl + '/' + id, {
        method: 'DELETE',
    })
}

// News //
export function fetchNews () {
    return fetch(fetchNewsUrl, {
    }).then(resp => resp.json())
}

export function patchNews (news) {
    return fetch(patchNewsUrl + '/1', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ news })
    })
}

// Photos //
export function postPhotos (image) {
    return fetch(postPhotoUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image })
    }).then(resp => resp.json())
}

export default { signin, validate, postReview, fetchReviews, patchReview, deleteReview, fetchNews, patchNews, postPhotos }
