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
    allPokemon: {
      name: string;
      url: string;
    }[];
  };
};
