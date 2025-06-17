export const useExperiment = defineStore("experiment", {

    state: () => ({
        outcomes: [] as number[],
        outcomeFrequencies: {} as Record<number, number>,
        history: [] as Array<{ step: number } & Record<string, number>>,
        differenceHistory: [] as Array<{ step: number, difference: number }>,
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
        getOutcomeProbabilities: (state) => {
            const totalOutcomes = Object.values(state.outcomeFrequencies).reduce((sum, freq) => sum + freq, 0)
            if (totalOutcomes === 0) return {}
            const probabilities: Record<number, number> = {}
            for (let i = 1; i <= 6; i++) {
                probabilities[i] = (state.outcomeFrequencies[i] || 0) / totalOutcomes
            }
            return probabilities
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
            this.addToDifferenceHistory()
        },
        reset() {
            this.outcomes = []
            this.outcomeFrequencies = {}
            this.history = []
            this.differenceHistory = []

            this.setup()
        },
        setup() {
            this.outcomes = Array.from({ length: 6 }, (_, i) => (i + 1))
        },
        addToHistory() {
            const currentProbabilities = this.getOutcomeProbabilities
            const roundedProps = Object.fromEntries(
                Object.entries(currentProbabilities).map(([outcome, probability]) => [
                    outcome,
                    parseFloat(probability.toFixed(4)),
                ]),
            )
            this.history.push({ step: this.history.length + 1, ...roundedProps })
        },
        addToDifferenceHistory() {
            const currentProbabilities = Object.values(this.getOutcomeProbabilities)
            const difference = Math.max(...currentProbabilities) - Math.min(...currentProbabilities)

            this.differenceHistory.push({
                step: this.differenceHistory.length + 1,
                difference: parseFloat(difference.toFixed(4)),
            })
        },
    },

})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useExperiment, import.meta.hot))
}
