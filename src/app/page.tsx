"use client"
import Pagination from "@/components/Helper/Pagination";
import AgentCard from "@/components/Home/AgentCard";
import AgentMarketplace from "@/components/Home/AgentMarketplace";
import Hero from "@/components/Home/Hero";
import { useState } from "react";


const itemsPerPage = 10;
const totalItems = 1130;
const totalPages = Math.ceil(totalItems / itemsPerPage);

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
  <div>
   
    <Hero />
    <AgentCard />
    <AgentMarketplace />
    <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
  </div>
  );
}
