export const useExperiment = defineStore("experiment", {

    state: () => ({
        outcomes: [] as number[],
        outcomeFrequencies: {} as Record<number, number>,
        history: [] as Array<{ step: number } & Record<string, number>>,
    }),

    getters: {
        outcomeCount: state => state.outcomes.length,
        getOutcomeFrequency: state => (outcome: number) => {
            return state.outcomeFrequencies[outcome] || 0
        },
        getOutcomeFrequencies: (state) => {
            return Object.entries(state.outcomeFrequencies).map(([outcome, frequency]) => ({
                outcome,
                frequency,
            }))
        },
        getOutcomeProbability: state => (outcome: number) => {
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
        addOutcome(outcome: number) {
            if (this.outcomeFrequencies[outcome]) {
                this.outcomeFrequencies[outcome]++
            } else {
                this.outcomeFrequencies[outcome] = 1
            }
            this.addToHistory()
        },
        reset() {
            this.outcomes = []
            this.outcomeFrequencies = {}
            this.history = []

            this.setup()
        },
        setup() {
            this.outcomes = Array.from({ length: 6 }, (_, i) => (i + 1))
        },
        addToHistory() {
            const probabilities: Record<string, number> = {}
            for (let i = 1; i <= 6; i++) {
                probabilities[i.toString()] = parseFloat(this.getOutcomeProbability(i).toFixed(4))
            }
            this.history.push({ step: this.history.length + 1, ...probabilities })
        },
    },

})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useExperiment, import.meta.hot))
}
