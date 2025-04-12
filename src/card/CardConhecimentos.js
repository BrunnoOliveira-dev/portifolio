import React from "react";
import BaseCard from "./BaseCard";
import Progress from "../components/ui/progress";

function CardConhecimentos({ title, nivel, resumo }) {
	const nivelPercentual = {
		"Iniciante": 25,
		"Intermediário": 50,
		"Avançado": 75,
		"Especialista": 100,
	}[nivel] || 0;

	return (
		<BaseCard width={700} height={120} className="p-4 flex flex-col gap-2">
			<h2 className="text-lg font-bold text-white">{title}</h2>
			<p className="text-sm text-gray-300">{resumo}</p>
			<div className="flex items-center gap-2">
				<span className="text-xs text-gray-400">{nivel}</span>
				<Progress value={nivelPercentual} className="w-full" />
			</div>
		</BaseCard>
	);
}

export default CardConhecimentos;
