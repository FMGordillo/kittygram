<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';

	export let data: PageData;

	export let posts = writable(data.posts);

	function submitLike(post) {
		const newPosts = $posts.map((_post) => {
			if (_post.id === post.id) {
				_post.likes += 1;
			}
			return _post;
		});
		posts.update(() => newPosts);
	}
</script>

<main>
	<h1>Facebook ahre</h1>
	<section>
		<h1>Posts</h1>
		<ul class="posts">
			{#each $posts as post}
				<li class="post">
					<p>{post.title}</p>
					<img title={post.title} src={post.image} />
					<div>
						<button on:click={() => submitLike(post)}>Like ({post.likes})</button>
						<button>Comentarios</button>
						<button>Compartir</button>
					</div>
				</li>
			{/each}
		</ul>
	</section>
</main>

<style>
	:global(*),
	:global(*::before),
	:global(*::after) {
		box-sizing: border-box;
	}

	:global(*) {
		margin: 0;
	}

	:global(html),
	:global(body) {
		height: 100%;
	}

	:global(body) {
		line-height: 1.5;
		font-family: 'Poppins', sans-serif;
		-webkit-font-smoothing: antialiased;
	}

	img,
	picture,
	video,
	canvas,
	svg {
		display: block;
		max-width: 100%;
	}

	input,
	button,
	textarea,
	select {
		font: inherit;
	}

	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		overflow-wrap: break-word;
	}

	#root,
	#__next {
		isolation: isolate;
	}

	@media (prefers-color-scheme: dark) {
		main {
			color: #fafafa;
			background: #333;
		}
	}
	@media (prefers-color-scheme: light) {
		main {
			color: #fafafa;
			background: #333;
		}
	}

	/* Aqui viene lo bueno joven */
	ul {
		list-style: none;
		padding: 0;
	}
	.posts {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
	}
	.post {
		display: flex;
		flex-direction: column;
		gap: 8px;
		color: black;
		background: #bababa;
		padding: 8px;
		border-radius: 8px 0;
	}
</style>
