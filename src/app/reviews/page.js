"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Review from "@/components/Review";
import { getAllReviews } from "../lib/querys";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const loadReviews = async () => {
            const data = await getAllReviews();
            if (data === false) {
                alert("ERROR al obtener las reseñas");
            } else {
                setReviews(data);
            }
        };

        loadReviews();
    }, []);

    return (
        <>
            <Header />
            <h1 className="text-2xl mt-4">Todas las reseñas disponibles:</h1>
            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {reviews?.map((review) => (
                    <Review review={review} key={review.id} />
                ))}
            </main>
        </>
    );
};
export default Reviews;
