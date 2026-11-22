import { ThreadCard } from "../components/ThreadCard";

export default function HomePage() {
	return (
		<div className="flex flex-col items-center bg-slate-100 dark:bg-slate-500 min-h-screen">
			<ThreadCard
				title="Thread 123"
				content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iure laboriosam commodi deserunt, animi iusto, sunt doloribus maiores similique officia dolore cum nulla velit nobis quibusdam accusantium repellendus rem esse."
				date={new Date()}
			/>
		</div>
	);
}
