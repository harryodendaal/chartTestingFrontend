import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import styles from "../styles/pages/subscribe.module.scss";
interface subscribeProps {}

const subscribe: React.FC<subscribeProps> = ({}) => {
	return (
		<>
			<Navbar />
			<div className={styles.container} style={{ marginTop: "80px" }}>
				<div className={styles.cards_container}>
					{/* 1st class */}
					<div className={styles.card}>
						<div className={styles.first_card}>
							<div className={styles.card_pricing}>
								<h3>Hobby</h3>
								<h2>$29</h2>
								<p>/month</p>
								<a href="#" className={styles.card_btn}>
									Get Started
								</a>
							</div>
						</div>
						<div className={styles.card_features}>
							<ul>
								<li>
									<span>&#1003;</span>250 Subscribe
								</li>
								<li>
									<span>&#1003;</span>Team Member
								</li>
								<li>
									<span>&#1003;</span>Metrics
								</li>
								<li>
									<span>&#1003;</span>Email/SMS/Webhook Notifications
								</li>
								<li>
									<span>&#1003;</span>Custom CSS
								</li>
							</ul>
						</div>
					</div>
					{/* 2nd card */}
					<div className={styles.card}>
						<div className={styles.second_card}>
							<div className={styles.card_pricing}>
								<h3>Startup</h3>
								<h2>$99</h2>
								<p>/month</p>
								<a href="#" className={styles.card_btn}>
									Get Started
								</a>
							</div>
						</div>
						<div className={styles.card_features}>
							<ul>
								<li>
									<span>&#1004;</span>1,000 Subscribe
								</li>
								<li>
									<span>&#1004;</span>10 Team Member
								</li>
								<li>
									<span>&#1004;</span>10 Metrics
								</li>
								<li>
									<span>&#1004;</span>Email/SMS/Webhook Notifications
								</li>
								<li>
									<span>&#1004;</span>Custom CSS
								</li>
								<li>
									<span>&#1004;</span>Status & Authentications
								</li>
								<li>
									<span>&#1004;</span>Team Memeber SSO
								</li>
							</ul>
						</div>
					</div>
					{/* 3rd card */}
					<div className={styles.card}>
						<div className={styles.third_card}>
							<div className={styles.card_pricing}>
								<h3>Enterprise</h3>
								<h2>$399</h2>
								<p>/month</p>
								<a href="#" className={styles.card_btn}>
									Get Started
								</a>
							</div>
						</div>
						<div className={styles.card_features}>
							<ul>
								<li>
									<span>&#1004;</span>5,000 Subscribe
								</li>
								<li>
									<span>&#1004;</span>25 Team Member
								</li>
								<li>
									<span>&#1004;</span>25 Metrics
								</li>
								<li>
									<span>&#1004;</span>Email/SMS/Webhook Notifications
								</li>
								<li>
									<span>&#1004;</span>Custom CSS
								</li>
								<li>
									<span>&#1004;</span>Status & Authentications
								</li>
								<li>
									<span>&#1004;</span>Team Memeber SSO
								</li>
								<li>
									<span>&#1004;</span>Component Subscriptions
								</li>
								<li>
									<span>&#1004;</span>Yearly PO & Invoicing Available
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default subscribe;
