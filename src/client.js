import * as sapper from '@sapper/app'

sapper.start({
	target: document.querySelector('#sapper'),

	store: data => {
		// 'data' is whatever was in the server-side store.
		return new Store(data)
	}
})
