const posts = [];

const titleImputNode = document.querySelector('#add-post__title');
const textImputNode = document.querySelector('#add-post__text');
const newPostBtnNode = document.querySelector('#add-post__send');
const postsNode = document.querySelector('#posts');

newPostBtnNode.addEventListener('click', function() {
	const postFromUser = getPostFromUser();
	addPost(postFromUser);

	renderPosts();
});

function getPostFromUser() {
	const title = titleImputNode.value;
	const text = textImputNode.value;

	return {
		title: title,
		text: text
	};
}

function addPost({title, text}) {
	posts.push({
		title: title,
		text: text
	});
}

function getPosts() {
	return posts;
}

function renderPosts() {
	const posts = getPosts();

	let postsHTML = '';

	posts.forEach(post => {
		postsHTML += `
		<div class="posts">
		<div class="post">
			<div class="post__content">
				<p class='post__title'>${post.title}</p>
				<p class="post__description">${post.text}</p>
			</div>
		</div>
	</div>
	`
	});

	postsNode.innerHTML = postsHTML;
}