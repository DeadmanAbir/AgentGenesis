import { Parser } from 'expr-eval';

export class CalculatorTool {
  async evaluate(input: string): Promise<string> {
    try {
      return Parser.evaluate(input).toString();
    } catch (error) {
      console.error('Error calculating expression:', error);
      return 'Error Calculating Expression';
    }
  }

  async evaluateMultiVar(
    expression: string,
    variables: Record<string, number>,
  ): Promise<string> {
    try {
      const substitutedExpression = this.substituteVariables(
        expression,
        variables,
      );
      return Parser.evaluate(substitutedExpression).toString();
    } catch (error) {
      console.error('Error evaluating multi-variable expression:', error);
      return 'Error evaluating expression';
    }
  }

  private substituteVariables(
    expression: string,
    variables: Record<string, number>,
  ): string {
    Object.entries(variables).forEach(([variable, value]) => {
      expression = expression.replace(
        new RegExp(variable, 'g'),
        value.toString(),
      );
    });
    return expression;
  }
}
