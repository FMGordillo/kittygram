import type { PageServerLoad } from './$types';

type User = {
	avatarUrl: string;
	name: string;
};

type Post = {
	id: string;
	title: string;
	shortDescription: string;
	slug: string;
	image: string;
	likes: number;
	user: User;
};

const getImage = async () => {
	const data = await fetch('https://loremflickr.com/320/240');
	return data.url;
};

export const load = (async () => {
	const user: User = {
		name: 'Facundito',
		avatarUrl: await getImage()
	};
	const posts: Post[] = [
		{
			id: '1',
			title: 'My post',
			shortDescription: 'This is my new post',
			slug: 'my-post',
			image: await getImage(),
			likes: 0,
			user
		},
		{
			id: '2',
			title: 'Another post',
			shortDescription: 'This is my new post',
			slug: 'my-second-post',
			image: await getImage(),
			likes: 0,
			user
		},
		{
			id: '3',
			title: 'My third post',
			shortDescription: 'This is my new post',
			slug: 'my-third-post',
			image: await getImage(),
			likes: 0,
			user
		}
	];

	return {
		posts
	};
}) satisfies PageServerLoad;
