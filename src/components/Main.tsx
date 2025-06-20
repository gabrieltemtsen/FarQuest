import React from 'react';
import { WalletConnection } from './app/wallet-connection';
import { GameHeader } from './app/header/header';
// import { useGameLogic } from '~/hooks/use-game-logic';
import { GameContent } from './app/content/content';
import { GameFooter } from './app/footer/footer';
import { useGameLogic } from '~/hooks/use-game';

const FarquestGame: React.FC = () => {
  const {
    wallet,
    gameState,
    playerStats,
    isGameOver,
    isBonus,
    levelCompleted,
    currentDifficulty,
    questionInLevel,
    connectWallet,
    disconnectWallet,
    startGame,
    handleAnswer,
    claimRewards,
    resetGame,
    isConnectPending,
    currentQuestion,
    totalNumberOfQuestions
  } = useGameLogic();


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto bg-black/20 backdrop-blur-xl rounded-3xl border border-purple-500/30 overflow-hidden shadow-2xl">
        <GameHeader gameState={gameState.state} />

        <div className="p-4 border-b border-purple-500/20">
          <WalletConnection
            wallet={wallet}
            onConnect={connectWallet}
            onDisconnect={disconnectWallet}
            isConnectPending={isConnectPending}
          />
        </div>

        <GameContent
          gameState={gameState}
          playerStats={playerStats}
          currentQuestion={currentQuestion}
          currentDifficulty={currentDifficulty}
          questionInLevel={questionInLevel}
          wallet={wallet}
          isBonus={isBonus}
          isGameOver={isGameOver}
          levelCompleted={levelCompleted}
          totalNumberOfQuestions={totalNumberOfQuestions}
          onStartGame={startGame}
          onAnswerSelect={handleAnswer}
          onClaimRewards={claimRewards}
          onResetGame={resetGame}
        />

        <GameFooter />
      </div>
    </div>
  );
};

export default FarquestGame;