import { CodeBlock } from '../components/CodeBlock';
import { ImageGrid } from '../components/ImageGrid';
import type { ProjectSection } from '../components/ProjectDetail';

export const neuralNetworkOptimizerSections: ProjectSection[] = [
  {
    id: 'overview',
    title: 'Overview',
    content: (
      <div className="space-y-4">
        <p>
          The Neural Network Optimizer is an advanced deep learning framework designed to
          automatically optimize neural network architectures using AutoML techniques. This
          project leverages state-of-the-art algorithms to find the best network configuration
          for a given dataset.
        </p>
        <p>
          Built with PyTorch and TensorFlow, the system can handle various types of neural
          networks including CNNs, RNNs, and Transformers. It uses techniques like Neural
          Architecture Search (NAS) and hyperparameter optimization to achieve optimal results.
        </p>
        <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
          <h4 className="mb-3">Key Achievements</h4>
          <ul className="space-y-2">
            <li>✓ 35% improvement in model accuracy</li>
            <li>✓ 50% reduction in training time</li>
            <li>✓ Automated hyperparameter tuning</li>
            <li>✓ Support for multiple frameworks</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'architecture',
    title: 'System Architecture',
    content: (
      <div className="space-y-4 dark">
        <p>
          The optimizer follows a modular architecture with clear separation of concerns.
          The main components include the Search Space Definition, Search Algorithm,
          and Performance Evaluator.
        </p>
        <CodeBlock
          language="python"
          filename="optimizer_core.py"
          code={`class NeuralArchitectureOptimizer:
    def __init__(self, search_space, objective='accuracy'):
        self.search_space = search_space
        self.objective = objective
        self.history = []
    
    def optimize(self, X_train, y_train, X_val, y_val, iterations=100):
        """
        Main optimization loop using Bayesian Optimization
        """
        for i in range(iterations):
            # Sample architecture from search space
            architecture = self.sample_architecture()
            
            # Build and train model
            model = self.build_model(architecture)
            history = self.train_model(model, X_train, y_train, X_val, y_val)
            
            # Evaluate performance
            performance = self.evaluate(model, X_val, y_val)
            
            # Update search space based on performance
            self.update_search_space(architecture, performance)
            
            self.history.append({
                'iteration': i,
                'architecture': architecture,
                'performance': performance
            })
        
        return self.get_best_architecture()`}
        />
        <p>
          The architecture uses a Bayesian Optimization approach to efficiently explore
          the search space. Each iteration samples a new architecture, trains it, and
          updates the posterior distribution based on the results.
        </p>
      </div>
    ),
  },
  {
    id: 'implementation',
    title: 'Implementation Details',
    content: (
      <div className="space-y-4 dark">
        <p>
          The implementation leverages PyTorch's flexibility and TensorFlow's production-ready
          features. Here's how we define the search space for different layer types:
        </p>
        <CodeBlock
          language="python"
          filename="search_space.py"
          code={`from typing import Dict, List, Any

class SearchSpace:
    def __init__(self):
        self.layer_types = ['conv2d', 'dense', 'lstm', 'attention']
        self.activation_functions = ['relu', 'tanh', 'sigmoid', 'gelu']
        self.optimizers = ['adam', 'sgd', 'rmsprop', 'adamw']
        
    def define_architecture_space(self) -> Dict[str, Any]:
        return {
            'num_layers': (2, 10),
            'layer_config': {
                'conv2d': {
                    'filters': (32, 512),
                    'kernel_size': [3, 5, 7],
                    'stride': [1, 2]
                },
                'dense': {
                    'units': (64, 1024),
                    'dropout': (0.0, 0.5)
                },
                'learning_rate': (1e-5, 1e-2, 'log-uniform'),
                'batch_size': [16, 32, 64, 128]
            }
        }`}
        />
        <ImageGrid
          images={[
            {
              src: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?w=800',
              alt: 'Neural network visualization',
              caption: 'Visualization of optimized neural network architecture',
            },
            {
              src: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=800',
              alt: 'Training metrics',
              caption: 'Training loss and accuracy curves over iterations',
            },
          ]}
        />
      </div>
    ),
  },
  {
    id: 'results',
    title: 'Results & Performance',
    content: (
      <div className="space-y-4">
        <p>
          The optimizer was tested on several benchmark datasets including CIFAR-10,
          ImageNet, and custom datasets. The results show significant improvements
          over manually designed architectures.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-black/10 dark:border-white/10">
                <th className="text-left py-3 px-4">Dataset</th>
                <th className="text-left py-3 px-4">Baseline Accuracy</th>
                <th className="text-left py-3 px-4">Optimized Accuracy</th>
                <th className="text-left py-3 px-4">Improvement</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-black/5 dark:border-white/5">
                <td className="py-3 px-4">CIFAR-10</td>
                <td className="py-3 px-4">92.3%</td>
                <td className="py-3 px-4">96.8%</td>
                <td className="py-3 px-4 text-green-600 dark:text-green-400">+4.5%</td>
              </tr>
              <tr className="border-b border-black/5 dark:border-white/5">
                <td className="py-3 px-4">ImageNet</td>
                <td className="py-3 px-4">76.2%</td>
                <td className="py-3 px-4">81.1%</td>
                <td className="py-3 px-4 text-green-600 dark:text-green-400">+4.9%</td>
              </tr>
              <tr className="border-b border-black/5 dark:border-white/5">
                <td className="py-3 px-4">Custom Dataset</td>
                <td className="py-3 px-4">88.5%</td>
                <td className="py-3 px-4">94.2%</td>
                <td className="py-3 px-4 text-green-600 dark:text-green-400">+5.7%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The optimization process typically converges within 50-100 iterations,
          making it practical for real-world applications.
        </p>
      </div>
    ),
  },
  {
    id: 'future',
    title: 'Future Improvements',
    content: (
      <div className="space-y-4">
        <p>
          While the current system achieves impressive results, there are several
          areas for future enhancement:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Multi-objective optimization:</strong> Simultaneously optimize for
            accuracy, inference speed, and model size
          </li>
          <li>
            <strong>Transfer learning integration:</strong> Leverage pre-trained models
            as starting points for optimization
          </li>
          <li>
            <strong>Distributed training:</strong> Scale the search process across
            multiple GPUs and machines
          </li>
          <li>
            <strong>AutoML pipeline:</strong> Extend to include data preprocessing
            and feature engineering
          </li>
        </ul>
        <div className="p-6 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
          <p className="italic">
            "This project demonstrates the power of automated machine learning and
            its potential to democratize AI development. The next phase will focus
            on making these tools accessible to non-experts."
          </p>
        </div>
      </div>
    ),
  },
];
