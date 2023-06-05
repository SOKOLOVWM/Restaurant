import lamb from "./../assets/images/menu_lamb.jpg";
import pike from "./../assets/images/menu_pike.jpg";
import turkey from "./../assets/images/menu_turkey.jpg";

export const initialState = [
	{
		id: 1,
		url: "cold-snack",
		title: "Холодные закуски",
		products: [
			{
				id: 1,
				title: "Ягненок (cold)",
				description:
					"Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
				weight: 340,
				price: 620,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: lamb,
					alt: "lamb",
				},
				caloric: {
					protein: 12.0,
					fat: 14.0,
					calory: 16.0,
					carb: 123,
					weight: 340,
				},
			},
			{
				id: 2,
				title: "Щука (cold)",
				description: "Фаршированная яблоками",
				weight: 225,
				price: 460,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: pike,
					alt: "pike",
				},
				caloric: {
					protein: 22.0,
					fat: 24.0,
					calory: 26.0,
					carb: 234,
					weight: 225,
				},
			},
			{
				id: 3,
				title: "Утка (cold)",
				description: "Фаршированная рисом, курагой и айвой",
				weight: 280,
				price: 540,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: turkey,
					alt: "turkey",
				},
				caloric: {
					protein: 32.0,
					fat: 34.0,
					calory: 36.0,
					carb: 345,
					weight: 280,
				},
			},
		],
	},
	{
		id: 2,
		url: "hot-snack",
		title: "Горячие закуски",
		products: [
			{
				id: 4,
				title: "Ягненок (hot)",
				description:
					"Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
				weight: 340,
				price: 620,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: lamb,
					alt: "lamb",
				},
				caloric: {
					protein: 12.0,
					fat: 14.0,
					calory: 16.0,
					carb: 123,
					weight: 340,
				},
			},
			{
				id: 5,
				title: "Щука (hot)",
				description: "Фаршированная яблоками",
				weight: 225,
				price: 460,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: pike,
					alt: "pike",
				},
				caloric: {
					protein: 22.0,
					fat: 24.0,
					calory: 26.0,
					carb: 234,
					weight: 225,
				},
			},
			{
				id: 6,
				title: "Утка (hot)",
				description: "Фаршированная рисом, курагой и айвой",
				weight: 280,
				price: 540,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: turkey,
					alt: "turkey",
				},
				caloric: {
					protein: 32.0,
					fat: 34.0,
					calory: 36.0,
					carb: 345,
					weight: 280,
				},
			},
		],
	},
	{
		id: 3,
		url: "meat-dishes",
		title: "Мясные блюда",
		products: [
			{
				id: 7,
				title: "Ягненок (meat)",
				description:
					"Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
				weight: 340,
				price: 620,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: lamb,
					alt: "lamb",
				},
				caloric: {
					protein: 12.0,
					fat: 14.0,
					calory: 16.0,
					carb: 123,
					weight: 340,
				},
			},
			{
				id: 8,
				title: "Щука (meat)",
				description: "Фаршированная яблоками",
				weight: 225,
				price: 460,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: pike,
					alt: "pike",
				},
				caloric: {
					protein: 22.0,
					fat: 24.0,
					calory: 26.0,
					carb: 234,
					weight: 225,
				},
			},
			{
				id: 9,
				title: "Утка (meat)",
				description: "Фаршированная рисом, курагой и айвой",
				weight: 280,
				price: 540,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: turkey,
					alt: "turkey",
				},
				caloric: {
					protein: 32.0,
					fat: 34.0,
					calory: 36.0,
					carb: 345,
					weight: 280,
				},
			},
		],
	},
	{
		id: 4,
		url: "soup",
		title: "Супы",
		products: [
			{
				id: 10,
				title: "Ягненок (soup)",
				description:
					"Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
				weight: 340,
				price: 620,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: lamb,
					alt: "lamb",
				},
				caloric: {
					protein: 12.0,
					fat: 14.0,
					calory: 16.0,
					carb: 123,
					weight: 340,
				},
			},
			{
				id: 11,
				title: "Щука (soup)",
				description: "Фаршированная яблоками",
				weight: 225,
				price: 460,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: pike,
					alt: "pike",
				},
				caloric: {
					protein: 22.0,
					fat: 24.0,
					calory: 26.0,
					carb: 234,
					weight: 225,
				},
			},
			{
				id: 12,
				title: "Утка (soup)",
				description: "Фаршированная рисом, курагой и айвой",
				weight: 280,
				price: 540,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: turkey,
					alt: "turkey",
				},
				caloric: {
					protein: 32.0,
					fat: 34.0,
					calory: 36.0,
					carb: 345,
					weight: 280,
				},
			},
		],
	},
	{
		id: 5,
		url: "fish-dishes",
		title: "Рыбные блюда",
		products: [
			{
				id: 13,
				title: "Ягненок (fish)",
				description:
					"Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
				weight: 340,
				price: 620,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: lamb,
					alt: "lamb",
				},
				caloric: {
					protein: 12.0,
					fat: 14.0,
					calory: 16.0,
					carb: 123,
					weight: 340,
				},
			},
			{
				id: 14,
				title: "Щука (fish)",
				description: "Фаршированная яблоками",
				weight: 225,
				price: 460,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: pike,
					alt: "pike",
				},
				caloric: {
					protein: 22.0,
					fat: 24.0,
					calory: 26.0,
					carb: 234,
					weight: 225,
				},
			},
			{
				id: 15,
				title: "Утка (fish)",
				description: "Фаршированная рисом, курагой и айвой",
				weight: 280,
				price: 540,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: turkey,
					alt: "turkey",
				},
				caloric: {
					protein: 32.0,
					fat: 34.0,
					calory: 36.0,
					carb: 345,
					weight: 280,
				},
			},
		],
	},
	{
		id: 6,
		url: "grill",
		title: "Гриль меню",
		products: [
			{
				id: 16,
				title: "Ягненок (grill)",
				description:
					"Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
				weight: 340,
				price: 620,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: lamb,
					alt: "lamb",
				},
				caloric: {
					protein: 12.0,
					fat: 14.0,
					calory: 16.0,
					carb: 123,
					weight: 340,
				},
			},
			{
				id: 17,
				title: "Щука (grill)",
				description: "Фаршированная яблоками",
				weight: 225,
				price: 460,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: pike,
					alt: "pike",
				},
				caloric: {
					protein: 22.0,
					fat: 24.0,
					calory: 26.0,
					carb: 234,
					weight: 225,
				},
			},
			{
				id: 18,
				title: "Утка (grill)",
				description: "Фаршированная рисом, курагой и айвой",
				weight: 280,
				price: 540,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: turkey,
					alt: "turkey",
				},
				caloric: {
					protein: 32.0,
					fat: 34.0,
					calory: 36.0,
					carb: 345,
					weight: 280,
				},
			},
		],
	},
	{
		id: 7,
		url: "specials",
		title: "Фирменные блюда",
		products: [
			{
				id: 19,
				title: "Ягненок (specials)",
				description:
					"Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
				weight: 340,
				price: 620,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: lamb,
					alt: "lamb",
				},
				caloric: {
					protein: 12.0,
					fat: 14.0,
					calory: 16.0,
					carb: 123,
					weight: 340,
				},
			},
			{
				id: 20,
				title: "Щука (specials)",
				description: "Фаршированная яблоками",
				weight: 225,
				price: 460,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: pike,
					alt: "pike",
				},
				caloric: {
					protein: 22.0,
					fat: 24.0,
					calory: 26.0,
					carb: 234,
					weight: 225,
				},
			},
			{
				id: 21,
				title: "Утка (specials)",
				description: "Фаршированная рисом, курагой и айвой",
				weight: 280,
				price: 540,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: turkey,
					alt: "turkey",
				},
				caloric: {
					protein: 32.0,
					fat: 34.0,
					calory: 36.0,
					carb: 345,
					weight: 280,
				},
			},
		],
	},
	{
		id: 8,
		url: "drinks",
		title: "Напитки",
		products: [
			{
				id: 22,
				title: "Ягненок (drinks)",
				description:
					"Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
				weight: 340,
				price: 620,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: lamb,
					alt: "lamb",
				},
				caloric: {
					protein: 12.0,
					fat: 14.0,
					calory: 16.0,
					carb: 123,
					weight: 340,
				},
			},
			{
				id: 23,
				title: "Щука (drinks)",
				description: "Фаршированная яблоками",
				weight: 225,
				price: 460,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: pike,
					alt: "pike",
				},
				caloric: {
					protein: 22.0,
					fat: 24.0,
					calory: 26.0,
					carb: 234,
					weight: 225,
				},
			},
			{
				id: 24,
				title: "Утка (drinks)",
				description: "Фаршированная рисом, курагой и айвой",
				weight: 280,
				price: 540,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: turkey,
					alt: "turkey",
				},
				caloric: {
					protein: 32.0,
					fat: 34.0,
					calory: 36.0,
					carb: 345,
					weight: 280,
				},
			},
		],
	},
];
