import ProductHero from '../src/components/sections/ProductHero/ProductHero';
import ProblemSolution from '../src/components/sections/ProblemSolution/ProblemSolution';
import RelaxEffect from '../src/components/sections/RelaxEffect/RelaxEffect';
import { useScrollObserver } from './hooks/useScrollObserver';
import { useParallax } from './hooks/useParallax';

export default function App() {
    useScrollObserver();
    useParallax();

    return (
        <main className="landing-page">
            < ProductHero />
            < ProblemSolution />
            < RelaxEffect />
        </main>
    );
}