export const useExperiment = defineStore("experiment", {

    state: () => ({
        outcomes: [] as string[],
        outcomeFrequencies: {} as Record<string, number>,
    }),

    getters: {
        outcomeCount: state => state.outcomes.length,
        getOutcomeFrequency: state => (outcome: string) => {
            return state.outcomeFrequencies[outcome] || 0
        },
        getOutcomeFrequencies: (state) => {
            return Object.entries(state.outcomeFrequencies).map(([outcome, frequency]) => ({
                outcome,
                frequency,
            }))
        },
        getOutcomeProbability: state => (outcome: string) => {
            const totalOutcomes = Object.values(state.outcomeFrequencies).reduce((sum, freq) => sum + freq, 0)
            if (totalOutcomes === 0) return 0
            return (state.outcomeFrequencies[outcome] || 0) / totalOutcomes
        },
    },

    actions: {
        runExperiment() {
            const randomOutcome = this.outcomes[Math.floor(Math.random() * this.outcomes.length)]
            this.addOutcome(randomOutcome)
        },
        addOutcome(outcome: string) {
            if (this.outcomeFrequencies[outcome]) {
                this.outcomeFrequencies[outcome]++
            } else {
                this.outcomeFrequencies[outcome] = 1
            }
        },
        reset() {
            this.outcomes = []
            this.outcomeFrequencies = {}

            this.setup()
        },
        setup() {
            this.outcomes = Array.from({ length: 6 }, (_, i) => (i + 1).toString())
        },
    },

})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useExperiment, import.meta.hot))
}
