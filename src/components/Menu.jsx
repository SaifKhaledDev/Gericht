const drinksLeft = [
  ["Chapel Hill Shiraz", "$56", "AU | Bottle"],
  ["Catena Malbec", "$59", "AR | Bottle"],
  ["La Vieille Rosé", "$44", "FR | 750 ml"],
  ["Rhino Pale Ale", "$31", "CA | 750 ml"],
  ["Irish Guinness", "$26", "IE | 750 ml"],
];

const cocktails = [
  ["Aperol Spritz", "$20", "Aperol | Villa Marchesi prosecco | soda | 30ml"],
  ["Dark 'N' Stormy", "$16", "Dark rum | Ginger beer | Slice of lime."],
  ["Daiquiri", "$10", "Rum | Citrus juice | Sugar"],
  ["Old Fashioned", "$31", "Bourbon | Brown sugar | Angostura Bitters"],
  ["Negroni", "$26", "Gin | Sweet Vermouth | Campari | Orange garnish"],
];

function MenuItem({ name, price, description }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex justify-between items-center gap-2 w-full">
        <span className="font-['Cormorant_Garamond'] text-lg md:text-xl font-bold text-[#DCCA87] whitespace-nowrap">
          {name}
        </span>

        <div className="flex-1 h-[1px] bg-[#FAFAFA]/40 mx-2"></div>

        <span className="font-['Cormorant_Garamond'] text-lg md:text-xl font-bold text-white">
          {price}
        </span>
      </div>

      <span className="text-[#AAAAAA] text-xs font-['Open_Sans']">
        {description}
      </span>
    </div>
  );
}

function Menu() {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#0C0C0C] text-white flex flex-col items-center w-full min-h-screen">
      <div className="flex flex-col items-center text-center gap-2 mb-16">
        <p className="font-['Cormorant_Garamond'] text-lg md:text-xl text-white tracking-wider capitalize">
          Menu That Fits You Palette
        </p>

        <img src="./Img/Frame 17.svg" alt="Icon" className="w-[45px]" />

        <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl lg:text-7xl font-bold text-[#DCCA87] tracking-wider capitalize mt-2">
          Today's Special
        </h2>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 max-w-6xl">
        <div className="flex-1 w-full flex flex-col items-center">
          <h3 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-white tracking-wide mb-10 text-center">
            Wine & Beer
          </h3>

          <div className="flex flex-col gap-10 w-full">
            {drinksLeft.map((drink) => (
              <MenuItem
                key={drink[0]}
                name={drink[0]}
                price={drink[1]}
                description={drink[2]}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center shrink-0 my-6 lg:my-0 w-full lg:w-auto">
          <img
            src="./Img/3596233 1.png"
            alt="Special dish"
            className="w-full max-w-[360px] object-contain"
          />
        </div>

        <div className="flex-1 w-full flex flex-col items-center">
          <h3 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-white tracking-wide mb-10 text-center">
            Cocktails
          </h3>

          <div className="flex flex-col gap-10 w-full">
            {cocktails.map((drink) => (
              <MenuItem
                key={drink[0]}
                name={drink[0]}
                price={drink[1]}
                description={drink[2]}
              />
            ))}
          </div>
        </div>
      </div>

      <button className="bg-[#DCCA87] text-[#0C0C0C] font-['Cormorant_Garamond'] font-bold text-base px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black cursor-pointer whitespace-nowrap mt-16">
        View More
      </button>
    </section>
  );
}

export default Menu;
