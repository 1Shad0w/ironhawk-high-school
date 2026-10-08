import React from "react";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import Icon from "../components/Icons.jsx";
import { lunchMenu } from "../data/lunch.js";

export default function LunchMenu() {
  return (
    <>
      <PageHero
        title="Lunch Menu"
        intro="Fresh, balanced meals served daily in the Hawk Commons."
        image="/images/campus-cafeteria.jpg"
        breadcrumbs={[{ label: "Lunch Menu" }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="This Week"
            title="Hawk Commons Menu"
            subtitle="Meals include a main entree, sides, and a milk or juice. Vegetarian options are available every day."
          />
          <div className="lunch-grid">
            {lunchMenu.map((day, index) => (
              <Reveal className="lunch-card" key={day.day} delay={index * 50}>
                <div className="lunch-card__day">{day.day}</div>
                <div>
                  <p className="lunch-card__main">{day.main}</p>
                  <p className="lunch-card__sides">{day.sides}</p>
                  <span className="lunch-card__veg">
                    Vegetarian: {day.vegetarian}
                  </span>
                </div>
                <div className="lunch-card__price">{day.price}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <SectionHeading eyebrow="Meal Information" title="Nutrition & Payments" />
          <div className="panel-grid">
            <Reveal className="panel">
              <div style={{ color: "var(--orange-dark)", marginBottom: 12 }}>
                <Icon name="lunch" size={28} />
              </div>
              <h3>Meal Prices</h3>
              <p>Breakfast $2.00 · Lunch $4.25 · Reduced $0.40. Free and reduced meal applications are available in the main office.</p>
            </Reveal>
            <Reveal className="panel" delay={60}>
              <div style={{ color: "var(--orange-dark)", marginBottom: 12 }}>
                <Icon name="attendance" size={28} />
              </div>
              <h3>Pay Online</h3>
              <p>Add funds to your student's meal account anytime through the Parent Portal. Balances carry over day to day.</p>
            </Reveal>
            <Reveal className="panel" delay={120}>
              <div style={{ color: "var(--orange-dark)", marginBottom: 12 }}>
                <Icon name="heart" size={28} />
              </div>
              <h3>Allergies & Diet</h3>
              <p>Menu items are labeled for major allergens. Contact Nutrition Services for specific dietary needs.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
