interface View {
	title: string;
	endpoint: string;
}

export const views: Record<string, View> = {
	trending: {
		title: 'Tendance',
		endpoint: 'trending/movie/day'
	},
	now_playing: {
		title: 'Dispo',
		endpoint: 'movie/now_playing'
	},
	upcoming: {
		title: 'Bientot',
		endpoint: 'movie/now_playing'
	}
};
