import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Star, 
  Trophy, 
  ChevronLeft, 
  Ghost, 
  Waves, 
  Smile, 
  Bird, 
  Footprints, 
  Mic2,
  Sparkles,
  CheckCircle2,
  XCircle,
  Lightbulb
} from 'lucide-react';
import { STORIES } from './constants';
import { Story, UserState } from './types';

const iconMap: Record<string, any> = {
  Ghost,
  Waves,
  Smile,
  Bird,
  Footprints,
  Mic2
};

export default function App() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [userState, setUserState] = useState<UserState>(() => {
    const saved = localStorage.getItem('reading_app_state');
    return saved ? JSON.parse(saved) : { points: 0, completedStories: [], unlockedBadges: [] };
  });
  const [view, setView] = useState<'list' | 'detail' | 'quiz'>('list');
  const [quizScore, setQuizScore] = useState(0);
  const [showReward, setShowReward] = useState(false);

  useEffect(() => {
    localStorage.setItem('reading_app_state', JSON.stringify(userState));
  }, [userState]);

  const handleStorySelect = (story: Story) => {
    setSelectedStory(story);
    setView('detail');
  };

  const handleBack = () => {
    if (view === 'quiz') {
      setView('detail');
    } else {
      setSelectedStory(null);
      setView('list');
    }
  };

  const addPoints = (amount: number) => {
    setUserState(prev => ({ ...prev, points: prev.points + amount }));
    setShowReward(true);
    setTimeout(() => setShowReward(false), 3000);
  };

  const completeStory = (storyId: string) => {
    if (!userState.completedStories.includes(storyId)) {
      setUserState(prev => ({
        ...prev,
        completedStories: [...prev.completedStories, storyId]
      }));
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF0] text-[#2D3436] font-sans selection:bg-yellow-200">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-[#E4E3E0] px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-200">
            <BookOpen size={24} />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-indigo-950">三年级精读笔记</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full border border-yellow-200 shadow-sm">
            <Star size={18} className="text-yellow-600 fill-yellow-500" />
            <span className="font-bold text-yellow-800">{userState.points}</span>
          </div>
          <div className="flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full border border-emerald-200 shadow-sm">
            <Trophy size={18} className="text-emerald-600" />
            <span className="font-bold text-emerald-800">{userState.completedStories.length}/6</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 pb-24">
        <AnimatePresence mode="wait">
          {view === 'list' && (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-black text-indigo-950 mb-2">欢迎来到故事王国！</h2>
                <p className="text-indigo-600/70 font-medium">点击一个故事开始你的精读之旅吧</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {STORIES.map((story) => {
                  const Icon = iconMap[story.icon];
                  const isCompleted = userState.completedStories.includes(story.id);
                  return (
                    <motion.button
                      key={story.id}
                      whileHover={{ scale: 1.02, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleStorySelect(story)}
                      className="relative group bg-white p-6 rounded-3xl border-2 border-[#E4E3E0] hover:border-indigo-500 transition-all text-left shadow-sm hover:shadow-xl hover:shadow-indigo-100"
                    >
                      <div className="flex items-start gap-5">
                        <div className={`${story.color} p-4 rounded-2xl text-white shadow-lg`}>
                          <Icon size={32} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold text-indigo-950">{story.title}</h3>
                            {isCompleted && <CheckCircle2 size={18} className="text-emerald-500" />}
                          </div>
                          <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                            {story.summary}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 group-hover:text-indigo-600 flex items-center gap-1">
                          开始阅读 <ChevronLeft size={14} className="rotate-180" />
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {view === 'detail' && selectedStory && (
            <StoryDetail 
              story={selectedStory} 
              onBack={handleBack} 
              onStartQuiz={() => setView('quiz')}
              isCompleted={userState.completedStories.includes(selectedStory.id)}
            />
          )}

          {view === 'quiz' && selectedStory && (
            <Quiz 
              story={selectedStory} 
              onBack={handleBack} 
              onComplete={(score) => {
                setQuizScore(score);
                addPoints(score * 10);
                completeStory(selectedStory.id);
                setView('detail');
              }}
            />
          )}
        </AnimatePresence>
      </main>

      {/* Reward Notification */}
      <AnimatePresence>
        {showReward && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-indigo-600 text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 border-4 border-white"
          >
            <Sparkles className="text-yellow-300 animate-pulse" />
            <span className="text-lg font-black tracking-wide">太棒了！积分 +10</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StoryDetail({ story, onBack, onStartQuiz, isCompleted }: { 
  story: Story; 
  onBack: () => void; 
  onStartQuiz: () => void;
  isCompleted: boolean;
}) {
  const Icon = iconMap[story.icon];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors"
      >
        <ChevronLeft size={20} /> 返回列表
      </button>

      <div className="bg-white rounded-[2rem] border-2 border-[#E4E3E0] overflow-hidden shadow-xl">
        <div className={`${story.color} p-10 text-white relative overflow-hidden`}>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl">
                <Icon size={40} />
              </div>
              <h2 className="text-4xl font-black">{story.title}</h2>
            </div>
            <p className="text-white/90 text-lg font-medium max-w-2xl leading-relaxed">
              {story.summary}
            </p>
          </div>
          <Icon size={200} className="absolute -right-10 -bottom-10 text-white/10 rotate-12" />
        </div>

        <div className="p-8 space-y-10">
          {/* Character */}
          <section>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-400 mb-4 flex items-center gap-2">
              <Smile size={18} /> 角色介绍
            </h3>
            <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
              <p className="text-indigo-900 font-bold text-lg">{story.character}</p>
            </div>
          </section>

          {/* Vocabulary */}
          <section>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-400 mb-4 flex items-center gap-2">
              <Lightbulb size={18} /> 好词积累
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {story.vocabulary.map((v, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border-2 border-gray-100 hover:border-indigo-200 transition-colors">
                  <span className="block text-xl font-black text-indigo-950 mb-2">{v.word}</span>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.explanation}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Good Sentence */}
          <section>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-400 mb-4 flex items-center gap-2">
              <Sparkles size={18} /> 精选好句
            </h3>
            <div className="relative p-8 bg-yellow-50 rounded-3xl border-2 border-yellow-100 italic">
              <p className="text-xl text-yellow-900 font-serif mb-4 leading-relaxed">“{story.goodSentence.text}”</p>
              <div className="flex items-start gap-2 text-yellow-700/70 not-italic text-sm">
                <span className="font-bold shrink-0">解析：</span>
                <p>{story.goodSentence.explanation}</p>
              </div>
            </div>
          </section>

          {/* Moral */}
          <section>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-400 mb-4 flex items-center gap-2">
              <CheckCircle2 size={18} /> 道理感悟
            </h3>
            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
              <p className="text-emerald-900 font-bold text-lg leading-relaxed">{story.moral}</p>
            </div>
          </section>

          {/* Reflection */}
          <section>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-400 mb-4 flex items-center gap-2">
              <Mic2 size={18} /> 读后感思路
            </h3>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 border-dashed">
              <p className="text-gray-600 leading-relaxed">{story.reflection}</p>
            </div>
          </section>

          {/* Action */}
          <div className="pt-6 border-t border-gray-100 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onStartQuiz}
              className={`px-12 py-5 rounded-full font-black text-xl shadow-xl transition-all flex items-center gap-3 ${
                isCompleted 
                ? 'bg-emerald-500 text-white hover:bg-emerald-600' 
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {isCompleted ? '再次挑战' : '开始答题挑战'} <Trophy size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Quiz({ story, onBack, onComplete }: { 
  story: Story; 
  onBack: () => void; 
  onComplete: (score: number) => void;
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = story.questions[currentQuestionIndex];

  const handleOptionSelect = (option: string) => {
    if (selectedOption) return;
    setSelectedOption(option);
    setShowExplanation(true);
    if (option === currentQuestion.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < story.questions.length - 1) {
      setCurrentQuestionIndex(i => i + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      onComplete(score);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-[2.5rem] border-2 border-[#E4E3E0] p-10 shadow-2xl">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-black text-indigo-950">答题挑战</h2>
          <div className="text-sm font-bold text-indigo-400 bg-indigo-50 px-4 py-2 rounded-full">
            问题 {currentQuestionIndex + 1} / {story.questions.length}
          </div>
        </div>

        <div className="space-y-8">
          <p className="text-2xl font-bold text-indigo-900 leading-tight">
            {currentQuestion.text}
          </p>

          <div className="space-y-4">
            {currentQuestion.options.map((option, i) => {
              const isCorrect = option === currentQuestion.correctAnswer;
              const isSelected = option === selectedOption;
              
              let bgColor = 'bg-white border-gray-200 hover:border-indigo-300';
              if (selectedOption) {
                if (isCorrect) bgColor = 'bg-emerald-50 border-emerald-500 text-emerald-700';
                else if (isSelected) bgColor = 'bg-red-50 border-red-500 text-red-700';
                else bgColor = 'bg-gray-50 border-gray-100 opacity-50';
              }

              return (
                <button
                  key={i}
                  disabled={!!selectedOption}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full p-6 text-left rounded-2xl border-2 font-bold text-lg transition-all flex justify-between items-center ${bgColor}`}
                >
                  {option}
                  {selectedOption && isCorrect && <CheckCircle2 className="text-emerald-500" />}
                  {selectedOption && isSelected && !isCorrect && <XCircle className="text-red-500" />}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100"
              >
                <div className="flex items-center gap-2 text-indigo-600 font-black mb-2">
                  <Lightbulb size={18} /> 知识点拨
                </div>
                <p className="text-indigo-900 leading-relaxed">{currentQuestion.explanation}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {showExplanation && (
            <div className="flex justify-end pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="bg-indigo-600 text-white px-10 py-4 rounded-full font-black text-lg shadow-lg hover:bg-indigo-700 transition-colors"
              >
                {currentQuestionIndex < story.questions.length - 1 ? '下一题' : '完成挑战'}
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
