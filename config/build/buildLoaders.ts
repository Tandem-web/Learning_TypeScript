import webpack from 'webpack'

export function buildLoaders(): webpack.RuleSetRule[]{
    const typeScriptLoader =         {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node-modules/,
    }

    return [
        typeScriptLoader,
    ]
}