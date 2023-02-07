export type StartUpProps = {
  startAppPressed: () => void;
};

export type SelectedPokemon = {
  pokemon: {
    selectedPokemon: {
      sprites: {
        other: {
          "official-artwork": {
            front_default: string;
          };
        };
      };
      name: string;
    };
    allPokemon: AllPokemon;
  };
};

export type AllPokemon = {
  name: string;
  url: string;
}[];

export type ButtonDirectionsSingleProps = {
  direction: "up" | "right" | "left" | "down";
  setCurrPkmnId: React.Dispatch<React.SetStateAction<number>>;
  currPkmnId: number;
  allPkmn: AllPokemon;
};
