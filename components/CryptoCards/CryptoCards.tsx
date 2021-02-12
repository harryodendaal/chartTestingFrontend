import React from "react";
import { useQuery } from "react-query";
import { getAllCryptos } from "../../api/api";
import styles from "./cryptoCards.module.scss";
import Loader from "react-loader-spinner";
interface CryptoCardsProps {}
interface cryptos {
	crypto: string;
	created_at: string;
	id: number;
}
export const CryptoCards: React.FC<CryptoCardsProps> = ({}) => {
	const { data, error, isLoading, isError } = useQuery<cryptos[], Error>(
		"cryptos",
		getAllCryptos
	);
	console.log("there an error", isError);

	if (isLoading) {
		return (
			<>
				<div className={styles.container_error}>
					<Loader type="ThreeDots" color="green" height={30} />
				</div>
			</>
		);
	}
	if (isError) {
		return <span> Error: {error?.message}</span>;
	}

	return (
		<>
			<div className={styles.container}>
				<div className={styles.cards_container}>
					{data?.map(({ crypto, id }) => (
						<div className={styles.card} key={id}>
							<div className={styles.card_background}>
								<div className={styles.card_content}>
									<h3>{crypto}</h3>
									<a href="#" className={styles.card_btn}>
										Solo
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
