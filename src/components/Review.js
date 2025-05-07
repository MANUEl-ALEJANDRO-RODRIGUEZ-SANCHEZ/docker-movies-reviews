import Image from "next/image";
import Link from "next/link";

const Review = ({review}) => {
    return (
        <div key={review.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-start">
                <div className="mr-3">
                    <Image
                        src="/icons/user.svg"
                        alt={review.user}
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium text-gray-800">
                            {review.user}
                        </h3>
                        <span className="text-xs text-gray-500">
                            {review.date}
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">Película: </span>
                        <Link
                            href={`/peliculas/${review.movie
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            className="text-purple-600 hover:underline"
                        >
                            {review.movie}
                        </Link>
                    </p>
                    <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) =>
                            i < Math.floor(review.rating) ? (
                                <Image
                                    src="/icons/yellow_star.svg"
                                    alt="star"
                                    width={20}
                                    height={20}
                                    key={`${review.id}.${i}`}
                                />
                            ) : (
                                <Image
                                    src="/icons/black_star.svg"
                                    alt="star"
                                    width={20}
                                    height={20}
                                    key={`${review.id}.${i}`}
                                />
                            )
                        )}
                        <span className="ml-1 text-sm text-gray-600">
                            {review.rating}/5
                        </span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                    <div className="mt-3 flex items-center space-x-4">
                        <button className="text-sm text-gray-500 hover:text-purple-600 flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                />
                            </svg>
                            Me gusta
                        </button>
                        <button className="text-sm text-gray-500 hover:text-purple-600 flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                />
                            </svg>
                            Comentar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Review;
