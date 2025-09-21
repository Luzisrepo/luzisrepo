<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rayzz | Sleepy</title>
    <script>
        const titleText = "Rayzz | Sleepy";
        const typingSpeed = 150;
        const pauseTime = 1000;

        let index = 0;
        let forward = true;

        function animateTitle() {
            if (forward) {
                document.title = titleText.substring(0, index + 1);
                index++;
                if (index === titleText.length) {
                    forward = false;
                    setTimeout(animateTitle, pauseTime);
                    return;
                }
            } else {
                document.title = titleText.substring(0, index - 1);
                index--;
                if (index === 0) {
                    forward = true;
                }
            }
            setTimeout(animateTitle, typingSpeed);
        }

        window.onload = animateTitle;
    </script>
    <meta name="description" content="Rayzz - Sleep-Deprived Full-Stack Dev">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Include Supabase JS -->
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    <script>
        // Initialize Supabase
        const supabaseUrl = 'https://cgsumnalxbxecqjbtwnr.supabase.co';
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnc3VtbmFseGJ4ZWNxamJ0d25yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0MTcxMTgsImV4cCI6MjA3Mzk5MzExOH0.GsnSKDNzxJmU_4N9BBBEN7XzQIPoR9yzygWp-3kwgEQ';
        const supabase = supabase.createClient(supabaseUrl, supabaseKey);
        
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: '#8a2be2',
                        secondary: '#9370db',
                        accent: '#9932cc',
                        dark: '#0f0a19',
                        darker: '#090511',
                    },
                    fontFamily: {
                        orbitron: ['Orbitron', 'sans-serif'],
                        poppins: ['Poppins', 'sans-serif'],
                    },
                    animation: {
                        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'float': 'float 6s ease-in-out infinite',
                        'gradient': 'gradient 8s ease infinite',
                        'glow': 'glow 2s ease-in-out infinite alternate',
                        'tilt': 'tilt 10s infinite linear',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        },
                        gradient: {
                            '0%, 100%': { 'background-position': '0% 50%' },
                            '50%': { 'background-position': '100% 50%' },
                        },
                        glow: {
                            'from': { 'box-shadow': '0 0 5px rgba(138, 43, 226, 0.5), 0 0 10px rgba(138, 43, 226, 0.3), 0 0 15px rgba(138, 43, 226, 0.2)' },
                            'to': { 'box-shadow': '0 0 15px rgba(138, 43, 226, 0.7), 0 0 20px rgba(138, 43, 226, 0.5), 0 0 30px rgba(138, 43, 226, 0.3)' },
                        },
                        tilt: {
                            '0%, 50%, 100%': { transform: 'rotate(0deg)' },
                            '25%': { transform: 'rotate(1deg)' },
                            '75%': { transform: 'rotate(-1deg)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        :root {
            --primary: #8a2be2;
            --secondary: #9370db;
            --accent: #9932cc;
            --dark: #0f0a19;
            --darker: #090511;
        }
        
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--darker);
            color: #e2e8f0;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            /* Modern scrollbar styling */
            scrollbar-width: thin;
            scrollbar-color: var(--primary) var(--darker);
        }
        
        /* Modern scrollbar for WebKit browsers */
        ::-webkit-scrollbar {
            width: 10px;
        }
        
        ::-webkit-scrollbar-track {
            background: var(--darker);
            border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, var(--primary), var(--accent));
            border-radius: 10px;
            border: 2px solid var(--darker);
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, var(--accent), var(--primary));
            box-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
        }
        
        /* Fade-in animation classes */
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Staggered animation delays */
        .fade-in.delay-100 { transition-delay: 0.1s; }
        .fade-in.delay-200 { transition-delay: 0.2s; }
        .fade-in.delay-300 { transition-delay: 0.3s; }
        .fade-in.delay-400 { transition-delay: 0.4s; }
        .fade-in.delay-500 { transition-delay: 0.5s; }
        .fade-in.delay-600 { transition-delay: 0.6s; }
        
        #starfield {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
        }
        
        #shooting-stars {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
        }
        
        .container {
            width: 100%;
            max-width: 1280px;
            padding-left: 1rem;
            padding-right: 1rem;
        }
        
        h1, h2, h3, h4 {
            font-family: 'Orbitron', sans-serif;
            font-weight: 700;
        }
        
        .neon-text {
            text-shadow: 0 0 5px rgba(138, 43, 226, 0.7), 
                         0 0 10px rgba(138, 43, 226, 0.5),
                         0 0 20px rgba(138, 43, 226, 0.3);
            animation: glow 2s ease-in-out infinite alternate;
        }
        
        .neon-border {
            box-shadow: 0 0 5px rgba(138, 43, 226, 0.7), 
                        0 0 10px rgba(138, 43, 226, 0.5);
            border: 1px solid rgba(138, 43, 226, 0.3);
        }
        
        .neon-hover:hover {
            box-shadow: 0 0 15px rgba(138, 43, 226, 0.9), 
                        0 0 25px rgba(138, 43, 226, 0.6),
                        0 0 35px rgba(138, 43, 226, 0.3);
            transform: translateY(-3px) scale(1.02);
        }
        
        .status-dot {
            width: 12px;
            height: 12px;
            background: linear-gradient(45deg, #48bb78, #38a169);
            border-radius: 50%;
            display: inline-block;
            margin-left: 8px;
            box-shadow: 0 0 10px #48bb78;
            animation: pulse-slow 2s infinite;
        }
        
        .skill-card, .service-card, .pricing-card, .stat-card {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
            background: rgba(15, 10, 25, 0.6);
            border: 1px solid rgba(138, 43, 226, 0.1);
        }
        
        .skill-card:hover, .service-card:hover, .pricing-card:hover {
            transform: translateY(-8px) rotate(1deg);
            box-shadow: 0 15px 30px rgba(138, 43, 226, 0.4);
            border: 1px solid rgba(138, 43, 226, 0.4);
        }
        
        .skill-card::before, .service-card::before, .pricing-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(138, 43, 226, 0.2), transparent);
            transition: 0.5s;
        }
        
        .skill-card:hover::before, .service-card:hover::before, .pricing-card:hover::before {
            left: 100%;
        }
        
        .portfolio-item {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            transform-style: preserve-3d;
        }
        
        .portfolio-item:hover {
            transform: scale(1.05) translateY(-5px) rotate(0.5deg);
            z-index: 10;
            box-shadow: 0 15px 30px rgba(138, 43, 226, 0.4);
        }
        
        .qr-code {
            animation: float 6s ease-in-out infinite;
        }
        
        button, .btn {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
            z-index: 1;
        }
        
        button::before, .btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, var(--primary), var(--accent), var(--primary));
            z-index: -1;
            transition: opacity 0.3s ease;
            opacity: 0;
        }
        
        button:hover::before, .btn:hover::before {
            opacity: 1;
        }
        
        /* Glassmorphism effect */
        .glass {
            background: rgba(15, 10, 25, 0.25);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(138, 43, 226, 0.18);
        }
        
        /* Text gradient */
        .text-gradient {
            background: linear-gradient(45deg, var(--primary), var(--secondary), var(--accent));
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
        }
        
        /* Improved Animated title gradient - Wave effect */
        .animated-gradient {
            background: linear-gradient(
                90deg,
                #8a2be2,
                #9370db,
                #9932cc,
                #ba55d3,
                #9370db,
                #8a2be2
            );
            background-size: 300% 100%;
            animation: gradient-wave 8s ease infinite;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            position: relative;
            display: inline-block;
        }
        
        .animated-gradient::after {
            content: '';
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(
                90deg,
                #8a2be2,
                #9370db,
                #9932cc,
                #ba55d3,
                #9370db,
                #8a2be2
            );
            background-size: 300% 100%;
            animation: gradient-wave 8s ease infinite;
        }
        
        @keyframes gradient-wave {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        /* Hover effect for list items */
        li {
            transition: transform 0.3s ease, color 0.3s ease;
            position: relative;
            padding-left: 1.5rem;
        }
        
        li::before {
            content: '➜';
            position: absolute;
            left: 0;
            color: var(--primary);
            transition: transform 0.3s ease;
        }
        
        li:hover {
            transform: translateX(5px);
            color: var(--secondary);
        }
        
        li:hover::before {
            transform: translateX(3px);
        }
        
        /* Pulse animation for CTA elements */
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .pulse {
            animation: pulse 2s infinite;
        }
        
        /* Floating animation */
        @keyframes floating {
            0% { transform: translate(0px, 0px); }
            50% { transform: translate(0px, -15px); }
            100% { transform: translate(0px, 0px); }
        }
        
        .floating {
            animation: floating 6s ease-in-out infinite;
        }
        
        /* Typewriter effect */
        .typewriter {
            overflow: hidden;
            border-right: .15em solid var(--primary);
            white-space: nowrap;
            animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
        }
        
        @keyframes typing {
            from { width: 0 }
            to { width: 100% }
        }
        
        @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: var(--primary) }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
            .hero-text {
                font-size: 2.5rem;
            }
            
            .skill-card:hover, .service-card:hover, .pricing-card:hover {
                transform: translateY(-5px);
            }
        }

        /* Enter Screen Styles */
        #enter-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #0f0a19 0%, #1a1030 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.8s ease-out;
        }

        .enter-content {
            text-align: center;
            max-width: 600px;
            padding: 2rem;
        }

        .enter-logo {
            font-size: 4rem;
            margin-bottom: 1.5rem;
            color: #8a2be2;
            text-shadow: 0 0 20px rgba(138, 43, 226, 0.7);
            animation: pulse 2s infinite;
        }

        .enter-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 3rem;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #8a2be2, #ba55d3, #9370db);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
        }

        .enter-subtitle {
            font-size: 1.2rem;
            margin-bottom: 2.5rem;
            color: #d8bfd8;
        }

        .enter-button {
            padding: 1rem 3rem;
            font-size: 1.2rem;
            font-family: 'Orbitron', sans-serif;
            background: linear-gradient(45deg, #8a2be2, #9932cc);
            border: none;
            border-radius: 50px;
            color: white;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 0 15px rgba(138, 43, 226, 0.5);
        }

        .enter-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 0 25px rgba(138, 43, 226, 0.7);
        }

        .enter-button:before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            z-index: -1;
            background: linear-gradient(45deg, #8a2be2, #9932cc, #ba55d3, #9370db, #8a2be2);
            background-size: 400%;
            border-radius: 50px;
            animation: steam 20s linear infinite;
        }

        @keyframes steam {
            0% {
                background-position: 0 0;
            }
            50% {
                background-position: 400% 0;
            }
            100% {
                background-position: 0 0;
            }
        }

        .audio-controls {
            margin-top: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }

        .volume-slider {
            -webkit-appearance: none;
            width: 150px;
            height: 5px;
            border-radius: 5px;
            background: rgba(255, 255, 255, 0.2);
            outline: none;
        }

        .volume-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: #8a2be2;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(138, 43, 226, 0.7);
        }

        .audio-error {
            display: none;
            background: rgba(200, 0, 0, 0.2);
            border: 1px solid rgba(255, 100, 100, 0.5);
            border-radius: 8px;
            padding: 10px;
            margin-top: 10px;
            text-align: center;
        }
        
        /* Auth Modal Styles */
        #auth-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(9, 5, 17, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9998;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }
        
        #auth-modal.active {
            opacity: 1;
            visibility: visible;
        }
        
        .auth-container {
            background: rgba(15, 10, 25, 0.95);
            border-radius: 16px;
            padding: 2.5rem;
            width: 90%;
            max-width: 450px;
            border: 1px solid rgba(138, 43, 226, 0.3);
            box-shadow: 0 0 35px rgba(138, 43, 226, 0.4);
            transform: scale(0.9);
            transition: transform 0.3s ease;
            position: relative;
        }
        
        #auth-modal.active .auth-container {
            transform: scale(1);
        }
        
        .auth-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            color: #9370db;
            font-size: 1.5rem;
            cursor: pointer;
            transition: color 0.3s ease;
        }
        
        .auth-close:hover {
            color: #8a2be2;
        }
        
        .auth-title {
            text-align: center;
            margin-bottom: 2rem;
            font-family: 'Orbitron', sans-serif;
            background: linear-gradient(45deg, #8a2be2, #ba55d3, #9370db);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
        }
        
        .auth-form {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
        }
        
        .form-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .form-label {
            font-size: 0.9rem;
            color: #d8bfd8;
        }
        
        .form-input {
            padding: 0.8rem 1rem;
            border-radius: 8px;
            border: 1px solid rgba(138, 43, 226, 0.3);
            background: rgba(15, 10, 25, 0.7);
            color: white;
            transition: all 0.3s ease;
            font-family: 'Poppins', sans-serif;
        }
        
        .form-input:focus {
            outline: none;
            border-color: #8a2be2;
            box-shadow: 0 0 10px rgba(138, 43, 226, 0.5);
        }
        
        .form-input:hover {
            border-color: #9370db;
        }
        
        .auth-btn {
            padding: 0.8rem;
            border-radius: 8px;
            border: none;
            background: linear-gradient(45deg, #8a2be2, #9932cc);
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 0.5rem;
            font-family: 'Poppins', sans-serif;
        }
        
        .auth-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(138, 43, 226, 0.4);
        }
        
        .auth-divider {
            text-align: center;
            margin: 1.5rem 0;
            position: relative;
            color: #9370db;
        }
        
        .auth-divider::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            width: 42%;
            height: 1px;
            background: linear-gradient(to right, transparent, rgba(138, 43, 226, 0.5));
        }
        
        .auth-divider::after {
            content: '';
            position: absolute;
            top: 50%;
            right: 0;
            width: 42%;
            height: 1px;
            background: linear-gradient(to left, transparent, rgba(138, 43, 226, 0.5));
        }
        
        .social-auth {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        
        .social-btn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 1px solid rgba(138, 43, 226, 0.3);
            background: rgba(15, 10, 25, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            color: #9370db;
        }
        
        .social-btn:hover {
            transform: translateY(-3px);
            border-color: #8a2be2;
            box-shadow: 0 5px 15px rgba(138, 43, 226, 0.3);
            color: #8a2be2;
        }
        
        .auth-footer {
            text-align: center;
            margin-top: 1.5rem;
            font-size: 0.9rem;
            color: #d8bfd8;
        }
        
        .auth-link {
            color: #8a2be2;
            cursor: pointer;
            transition: color 0.3s ease;
        }
        
        .auth-link:hover {
            color: #ba55d3;
            text-decoration: underline;
        }
        
        .auth-message {
            padding: 0.8rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            text-align: center;
            font-size: 0.9rem;
            display: none;
        }
        
        .auth-message.success {
            background: rgba(76, 175, 80, 0.2);
            border: 1px solid rgba(76, 175, 80, 0.5);
            color: #4caf50;
        }
        
        .auth-message.error {
            background: rgba(244, 67, 54, 0.2);
            border: 1px solid rgba(244, 67, 54, 0.5);
            color: #f44336;
        }
        
        /* User menu styles */
        .user-menu {
            position: relative;
        }
        
        .user-avatar {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background: linear-gradient(45deg, #8a2be2, #9932cc);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid rgba(138, 43, 226, 0.3);
        }
        
        .user-avatar:hover {
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(138, 43, 226, 0.5);
        }
        
        .user-dropdown {
            position: absolute;
            top: 110%;
            right: 0;
            background: rgba(15, 10, 25, 0.95);
            border: 1px solid rgba(138, 43, 226, 0.3);
            border-radius: 8px;
            padding: 1rem;
            min-width: 200px;
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            z-index: 100;
        }
        
        .user-dropdown.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        .user-info {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            padding-bottom: 0.8rem;
            border-bottom: 1px solid rgba(138, 43, 226, 0.2);
            margin-bottom: 0.8rem;
        }
        
        .user-info-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(45deg, #8a2be2, #9932cc);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }
        
        .user-details {
            overflow: hidden;
        }
        
        .user-name {
            font-weight: 600;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .user-email {
            font-size: 0.8rem;
            color: #9370db;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .dropdown-item {
            padding: 0.6rem 0;
            cursor: pointer;
            transition: color 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .dropdown-item:hover {
            color: #8a2be2;
        }
        
        /* Login button styles */
        .login-btn {
            position: fixed;
            top: 1.5rem;
            right: 1.5rem;
            z-index: 90;
            padding: 0.6rem 1.2rem;
            background: linear-gradient(45deg, #8a2be2, #9932cc);
            border: none;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(138, 43, 226, 0.3);
            font-family: 'Poppins', sans-serif;
        }
        
        .login-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(138, 43, 226, 0.4);
        }
        
        @media (max-width: 768px) {
            .auth-container {
                padding: 1.5rem;
                width: 85%;
            }
            
            .login-btn {
                top: 1rem;
                right: 1rem;
                padding: 0.5rem 1rem;
                font-size: 0.9rem;
            }
        }
    </style>
</head>
<body class="min-h-screen">
  
  <!-- YouTube iframe (hidden) -->
  <div id="player" style="display:none;"></div>

  <script src="https://www.youtube.com/iframe_api"></script>
  <script>
    let player;

    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'yJ6Lbsmb1lY', // your YouTube video ID
        events: {
          'onReady': onPlayerReady
        },
        playerVars: {
          autoplay: 0,
          controls: 0
        }
      });
    }

    function onPlayerReady(event) {
      // Listen for click anywhere
      document.addEventListener('click', () => {
        player.playVideo();
      });
    }
  </script>
    <!-- Enter Screen -->
    <div id="enter-screen">
        <div class="enter-content">
            <div class="enter-logo">
                <i class="fas fa-star"></i>
            </div>
            <h1 class="enter-title">RAYZZ</h1>
            <p class="enter-subtitle">Welcome to my corner. Click enter to explore it!</p>
            <button class="enter-button" id="enter-button">
                ENTER
            </button>
            <div class="audio-controls">
                <i class="fas fa-volume-up text-purple-400"></i>
                <input type="range" min="0" max="1" step="0.01" value="0.5" class="volume-slider" id="volume-control">
                <i class="fas fa-music text-purple-400" id="toggle-music" style="cursor: pointer;"></i>
            </div>
            <div id="audio-error" class="audio-error">
                <p class="text-red-400">Audio file couldn't be loaded. Please check the file path.</p>
            </div>
        </div>
    </div>
    
    <!-- Auth Modal -->
    <div id="auth-modal">
        <div class="auth-container">
            <button class="auth-close" id="auth-close">
                <i class="fas fa-times"></i>
            </button>
            <h2 class="auth-title" id="auth-modal-title">Login to Your Account</h2>
            
            <div id="auth-message" class="auth-message"></div>
            
            <form class="auth-form" id="login-form">
                <div class="form-group">
                    <label class="form-label" for="email">Email</label>
                    <input type="email" id="email" class="form-input" placeholder="Enter your email" required>
                </div>
                
                <div class="form-group">
                    <label class="form-label" for="password">Password</label>
                    <input type="password" id="password" class="form-input" placeholder="Enter your password" required>
                </div>
                
                <button type="submit" class="auth-btn">Sign In</button>
            </form>
            
            <form class="auth-form" id="signup-form" style="display: none;">
                <div class="form-group">
                    <label class="form-label" for="signup-email">Email</label>
                    <input type="email" id="signup-email" class="form-input" placeholder="Enter your email" required>
                </div>
                
                <div class="form-group">
                    <label class="form-label" for="signup-password">Password</label>
                    <input type="password" id="signup-password" class="form-input" placeholder="Create a password" required>
                </div>
                
                <div class="form-group">
                    <label class="form-label" for="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" class="form-input" placeholder="Confirm your password" required>
                </div>
                
                <button type="submit" class="auth-btn">Create Account</button>
            </form>
            
            <div class="auth-divider">or continue with</div>
            
            <div class="social-auth">
                <button class="social-btn" id="github-auth">
                    <i class="fab fa-github"></i>
                </button>
                <button class="social-btn" id="google-auth">
                    <i class="fab fa-google"></i>
                </button>
                <button class="social-btn" id="discord-auth">
                    <i class="fab fa-discord"></i>
                </button>
            </div>
            
            <div class="auth-footer">
                <p id="auth-toggle-text">Don't have an account? <span class="auth-link" id="auth-toggle-btn">Sign up</span></p>
                <p><span class="auth-link" id="forgot-password" style="display: none;">Forgot your password?</span></p>
            </div>
        </div>
    </div>
    
    <!-- Main Website Content (Initially Hidden) -->
    <div id="main-content" class="hidden">
        <!-- Login Button -->
        <button class="login-btn" id="login-button">
            <i class="fas fa-user"></i> Login
        </button>
        
        <!-- User Menu (Initially Hidden) -->
        <div class="user-menu" id="user-menu" style="display: none;">
            <div class="user-avatar" id="user-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="user-dropdown" id="user-dropdown">
                <div class="user-info">
                    <div class="user-info-avatar" id="user-info-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="user-details">
                        <div class="user-name" id="user-name">User Name</div>
                        <div class="user-email" id="user-email">user@example.com</div>
                    </div>
                </div>
                <div class="dropdown-item" id="profile-link">
                    <i class="fas fa-user-circle"></i> Profile
                </div>
                <div class="dropdown-item" id="settings-link">
                    <i class="fas fa-cog"></i> Settings
                </div>
                <div class="dropdown-item" id="logout-btn">
                    <i class="fas fa-sign-out-alt"></i> Logout
                </div>
            </div>
        </div>
        
        <!-- Starfield Background -->
        <canvas id="starfield"></canvas>
        
        <!-- Shooting Stars Canvas -->
        <canvas id="shooting-stars"></canvas>
        
        <header class="w-full pt-12 pb-20">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="mb-8 md:mb-0 fade-in">
                        <h1 class="text-4xl md:text-5xl font-bold neon-text text-gradient">
                            <a href="./xedni.html" class="hover:underline transition-all duration-300">Rayzz</a> <span class="status-dot"></span>
                        </h1>
                        <p class="text-secondary text-lg mt-3 typewriter">
                            Life just isn't enjoyable without a filter in your mouth.
                        </p>
                    </div>
                </div>
                
                <div class="mt-12 max-w-3xl glass p-8 rounded-2xl border border-white/5 fade-in delay-200">
                    <p class="text-lg text-gray-300 leading-relaxed">
                        I build and automate everything — from Discord bots and web apps to cloud-deployed AI services. 
                        Explore my work, my skills, and ways to connect with me.
                    </p>
                    
                    <div class="mt-8 flex flex-wrap gap-4">
                        <button onclick="shareProfile(this)" class="relative px-6 py-3 bg-dark/50 border border-secondary/30 rounded-xl font-medium transition-all duration-300 neon-hover glass">
                            <i class="fas fa-share-alt mr-2"></i>Share
                            <span class="share-tooltip absolute left-1/2 -translate-x-1/2 -top-10 bg-black/80 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 pointer-events-none transition-all duration-300 glass">
                                Copied!
                            </span>
                        </button>
                        <button onclick="toggleQR()" class="px-6 py-3 bg-dark/50 border border-secondary/30 rounded-xl font-medium transition-all duration-300 neon-hover glass">
                            <i class="fas fa-qrcode mr-2"></i>Show QR
                        </button>
                    </div>
                </div>
                
                <!-- Social buttons moved below the intro box -->
                <div class="mt-8 flex flex-wrap gap-3 justify-center fade-in delay-300">
                    <button onclick="copyEmail()" class="relative px-6 py-3 bg-secondary/20 hover:bg-accent/30 rounded-xl font-medium transition-all duration-300 neon-hover glass">
                        <i class="fas fa-envelope mr-2"></i>Copy Email
                        <span id="tooltip" class="absolute left-1/2 -translate-x-1/2 -top-10 bg-black/80 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 pointer-events-none transition-all duration-300 glass">
                            Copied!
                        </span>
                    </button>
                    <button onclick="copyDiscord()" class="px-6 py-3 bg-dark/50 hover:bg-accent/30 border border-secondary/30 rounded-xl font-medium transition-all duration-300 neon-hover glass">
                        <i class="fab fa-discord mr-2"></i>Discord
                    </button>
                    <button onclick="window.open('https://github.com/luzisrepo', '_blank')" class="px-6 py-3 bg-dark/50 hover:bg-accent/30 border border-secondary/30 rounded-xl font-medium transition-all duration-300 neon-hover glass">
                        <i class="fab fa-github mr-2"></i>GitHub
                    </button>
                </div>
            </div>
        </header>
        
        <div id="qrModal" class="hidden fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm">
            <div class="bg-darker/90 p-8 rounded-2xl max-w-md relative border border-primary/30 neon-border">
                <button onclick="toggleQR()" class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300">
                    <i class="fas fa-times text-xl"></i>
                </button>
                <h3 class="text-xl font-bold mb-4 text-center text-gradient">Scan to connect</h3>
                <div class="qr-code bg-white p-4 rounded-xl flex items-center justify-center">
                    <img src="frame.png" alt="QR Code" class="w-48 h-48 object-contain" />
                </div>
                <p class="mt-4 text-center text-gray-300">Scan this QR code to save my contact</p>
            </div>
        </div>
        
        <main class="flex-1 w-full">
            <div class="container mx-auto px-4 py-12">
                <section class="mb-20 fade-in">
                    <h2 class="text-3xl font-bold mb-12 text-center animated-gradient">Skills & Expertise</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="skill-card p-6 rounded-2xl fade-in delay-100">
                            <div class="flex items-center mb-4">
                                <div class="text-2xl mr-3 text-primary"><i class="fas fa-laptop-code"></i></div>
                                <h3 class="text-xl font-bold text-gradient">Programming Languages</h3>
                            </div>
                            <ul class="space-y-2">
                                <li>JavaScript/TypeScript (Expert)</li>
                                <li>Python (Advanced)</li>
                                <li>C++ (Intermediate)</li>
                                <li>Java (Intermediate)</li>
                            </ul>
                        </div>
                        
                        <div class="skill-card p-6 rounded-2xl fade-in delay-200">
                            <div class="flex items-center mb-4">
                                <div class="text-2xl mr-3 text-primary"><i class="fas fa-globe"></i></div>
                                <h3 class="text-xl font-bold text-gradient">Web Development</h3>
                            </div>
                            <ul class="space-y-2">
                                <li>React & Next.js</li>
                                <li>Node.js & Express</li>
                                <li>Tailwind CSS</li>
                                <li>REST & GraphQL APIs</li>
                            </ul>
                        </div>
                        
                        <div class="skill-card p-6 rounded-2xl fade-in delay-300">
                            <div class="flex items-center mb-4">
                                <div class="text-2xl mr-3 text-primary"><i class="fas fa-database"></i></div>
                                <h3 class="text-xl font-bold text-gradient">Database</h3>
                            </div>
                            <ul class="space-y-2">
                                <li>MongoDB</li>
                                <li>PostgreSQL</li>
                                <li>Firebase</li>
                                <li>Redis</li>
                            </ul>
                        </div>
                        
                        <div class="skill-card p-6 rounded-2xl fade-in delay-400">
                            <div class="flex items-center mb-4">
                                <div class="text-2xl mr-3 text-primary"><i class="fas fa-cloud"></i></div>
                                <h3 class="text-xl font-bold text-gradient">DevOps & Cloud</h3>
                            </div>
                            <ul class="space-y-2">
                                <li>Docker & Kubernetes</li>
                                <li>AWS & GCP</li>
                                <li>CI/CD Pipelines</li>
                                <li>Nginx & Apache</li>
                            </ul>
                        </div>
                        
                        <div class="skill-card p-6 rounded-2xl fade-in delay-500">
                            <div class="flex items-center mb-4">
                                <div class="text-2xl mr-3 text-primary"><i class="fas fa-cogs"></i></div>
                                <h3 class="text-xl font-bold text-gradient">Automation</h3>
                            </div>
                            <ul class="space-y-2">
                                <li>Discord Bots</li>
                                <li>Web Scraping</li>
                                <li>Browser Extensions</li>
                                <li>Scripting</li>
                            </ul>
                        </div>
                        
                        <div class="skill-card p-6 rounded-2xl fade-in delay-600">
                            <div class="flex items-center mb-4">
                                <div class="text-2xl mr-3 text-primary"><i class="fas fa-brain"></i></div>
                                <h3 class="text-xl font-bold text-gradient">AI/ML</h3>
                            </div>
                            <ul class="space-y-2">
                                <li>TensorFlow/PyTorch</li>
                                <li>NLP & Computer Vision</li>
                                <li>LLM Integration</li>
                                <li>Data Analysis</li>
                            </ul>
                        </div>
                    </div>
                </section>
                
                <section class="mb-20 fade-in">
                    <h2 class="text-3xl font-bold mb-12 text-center animated-gradient">By The Numbers</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="stat-card p-8 rounded-2xl text-center fade-in delay-100">
                            <div class="text-5xl font-bold text-gradient mb-2" id="projectsCount">0</div>
                            <h3 class="text-xl">Projects Completed</h3>
                        </div>
                        
                        <div class="stat-card p-8 rounded-2xl text-center fade-in delay-200">
                            <div class="text-5xl font-bold text-gradient mb-2" id="clientsCount">0</div>
                            <h3 class="text-xl">Happy Clients</h3>
                        </div>
                        
                        <div class="stat-card p-8 rounded-2xl text-center fade-in delay-300">
                            <div class="text-5xl font-bold text-gradient mb-2" id="awardsCount">0</div>
                            <h3 class="text-xl">Awards Won</h3>
                        </div>
                    </div>
                </section>
                
                <section class="mb-20 fade-in">
                    <h2 class="text-3xl font-bold mb-12 text-center animated-gradient">Services Offered</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="service-card p-6 rounded-2xl text-center fade-in delay-100">
                            <div class="text-4xl mb-4 text-primary"><i class="fas fa-desktop"></i></div>
                            <h3 class="text-xl font-bold mb-2 text-gradient">Full-stack Web Apps</h3>
                            <p class="text-gray-300">Custom web applications with modern frameworks and scalable backends.</p>
                        </div>
                        
                        <div class="service-card p-6 rounded-2xl text-center fade-in delay-200">
                            <div class="text-4xl mb-4 text-primary"><i class="fas fa-robot"></i></div>
                            <h3 class="text-xl font-bold mb-2 text-gradient">Discord Bot Development</h3>
                            <p class="text-gray-300">Feature-rich bots for moderation, utilities, games, and community management.</p>
                        </div>
                        
                        <div class="service-card p-6 rounded-2xl text-center fade-in delay-300">
  <div class="text-4xl mb-4 text-primary">
    <!-- Circle AI icon -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="inline-block w-10 h-10" role="img" aria-labelledby="aiTitle">
      <title id="aiTitle">AI Icon</title>
      <circle cx="50" cy="50" r="48" stroke="currentColor" stroke-width="6" fill="none"/>
      <text x="50%" y="55%" text-anchor="middle" font-size="38" font-family="Arial, sans-serif" fill="currentColor" dy=".3em">Ai</text>
    </svg>
    <span class="sr-only">AI icon</span>
  </div>

  <h3 class="text-xl font-bold mb-2 text-gradient">Machine Learning & AI</h3>
  <p class="text-gray-300">Custom AI solutions, model training, and smart automation.</p>
</div>


                        
                        <div class="service-card p-6 rounded-2xl text-center fade-in delay-400">
                            <div class="text-4xl mb-4 text-primary"><i class="fas fa-bolt"></i></div>
                            <h3 class="text-xl font-bold mb-2 text-gradient">Automation & DevOps</h3>
                            <p class="text-gray-300">Workflow automation, CI/CD pipelines, and cloud deployments.</p>
                        </div>
                    </div>
                </section>
                
                <section class="mb-20 fade-in">
                    <h2 class="text-3xl font-bold mb-12 text-center animated-gradient">Pricing</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="pricing-card p-8 rounded-2xl fade-in delay-100">
                            <h3 class="text-2xl font-bold mb-4 text-gradient">Website Building</h3>
                            <div class="text-4xl font-bold text-gradient mb-6">€199+</div>
                            <ul class="space-y-3 mb-8">
                                <li class="flex items-start">
                                    <span class="text-primary mr-2">✓</span>
                                    <span>Simple contact/landing page</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-primary mr-2">✓</span>
                                    <span>1–2 portfolio sections</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-primary mr-2">✓</span>
                                    <span>SEO-ready & mobile-friendly</span>
                                </li>
                            </ul>
                            <button onclick="window.location.href='form.html'" 
    class="w-full py-3 bg-primary/20 hover:bg-primary/30 rounded-xl font-bold transition-all duration-300 neon-hover glass pulse">
    Get Started
</button>
                        </div>
                        
                        <div class="pricing-card p-8 rounded-2xl relative neon-border scale-105 fade-in delay-200">
                            <div class="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-bl-xl rounded-tr-xl text-sm font-bold">
                                POPULAR
                            </div>
                            <h3 class="text-2xl font-bold mb-4 text-gradient">Plugin Building</h3>
                            <div class="text-4xl font-bold text-gradient mb-6">€349+</div>
                            <ul class="space-y-3 mb-8">
                                <li class="flex items-start">
                                    <span class="text-primary mr-2">✓</span>
                                    <span>Custom browser extensions</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-primary mr-2">✓</span>
                                    <span>Discord bots & automation scripts</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-primary mr-2">✓</span>
                                    <span>Lightweight API integrations</span>
                                </li>
                            </ul>
                            <button onclick="window.location.href='form.html'" 
    class="w-full py-3 bg-primary/20 hover:bg-primary/30 rounded-xl font-bold transition-all duration-300 neon-hover glass pulse">
    Get Started
</button>

                        </div>
                        
                        <div class="pricing-card p-6 rounded-2xl fade-in delay-300">
                            <h3 class="text-2xl font-bold mb-4 text-gradient">Advanced Projects</h3>
                            <div class="text-4xl font-bold text-gradient mb-6">€499+</div>
                            <ul class="space-y-3 mb-8">
                                <li class="flex items-start">
                                    <span class="text-primary mr-2">✓</span>
                                    <span>AI & ML integrations</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-primary mr-2">✓</span>
                                    <span>Cloud deployments (AWS, Docker)</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-primary mr-2">✓</span>
                                    <span>Custom automation pipelines</span>
                                </li>
                            </ul>
                            <button onclick="window.location.href='form.html'" 
    class="w-full py-3 bg-primary/20 hover:bg-primary/30 rounded-xl font-bold transition-all duration-300 neon-hover glass pulse">
    Get Started
</button>
                        </div>
                    </div>
                    
                    <p class="text-center mt-8 text-gray-400 fade-in delay-400">
                        * Prices are starting points. Final cost depends on project complexity and requirements.
                    </p>
                </section>
            </div>
        </main>
        
        <footer class="py-12 w-full glass mt-20 fade-in">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="mb-6 md:mb-0">
                        <h2 class="text-2xl font-bold neon-text text-gradient">Rayzz</h2>
                        <p class="text-gray-400 mt-2">© 2025 All rights reserved</p>
                    </div>
                    
                    <div class="flex gap-4">
                        <a href="https://github.com/luzisrepo" target="_blank" class="w-12 h-12 rounded-full bg-dark/50 border border-gray-800 flex items-center justify-center hover:bg-primary/30 transition-all duration-300 neon-hover">
                            <i class="fab fa-github text-xl"></i>
                        </a>

                        <a href="mailto:andrrr.discord@gmail.com" class="w-12 h-12 rounded-full bg-dark/50 border border-gray-800 flex items-center justify-center hover:bg-primary/30 transition-all duration-300 neon-hover">
                            <i class="fas fa-envelope text-xl"></i>
                        </a>

                        <button onclick="copyDiscord()" class="w-12 h-12 rounded-full bg-dark/50 border border-gray-800 flex items-center justify-center hover:bg-primary/30 transition-all duration-300 neon-hover">
                            <i class="fab fa-discord text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    
    <!-- Audio element for the song -->
    <audio id="bg-music" loop preload="auto">
        <source src="song1.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    
    <script>
        // Audio context for handling browser autoplay restrictions
        let audioContext = null;

        // Enter screen functionality
        document.addEventListener('DOMContentLoaded', function() {
            const enterScreen = document.getElementById('enter-screen');
            const enterButton = document.getElementById('enter-button');
            const mainContent = document.getElementById('main-content');
            const bgMusic = document.getElementById('bg-music');
            const volumeControl = document.getElementById('volume-control');
            const toggleMusic = document.getElementById('toggle-music');
            const audioError = document.getElementById('audio-error');
            
            // Set initial volume
            bgMusic.volume = volumeControl.value;
            
            // Update volume when slider changes
            volumeControl.addEventListener('input', function() {
                bgMusic.volume = this.value;
            });
            
            // Toggle music play/pause
            toggleMusic.addEventListener('click', function() {
                if (bgMusic.paused) {
                    bgMusic.play().catch(error => {
                        console.error('Playback failed:', error);
                        showAudioError();
                    });
                    toggleMusic.classList.remove('fa-play');
                    toggleMusic.classList.add('fa-pause');
                } else {
                    bgMusic.pause();
                    toggleMusic.classList.remove('fa-pause');
                    toggleMusic.classList.add('fa-play');
                }
            });
            
            // Check if audio can play
            bgMusic.addEventListener('canplay', function() {
                console.log('Audio can play');
                audioError.style.display = 'none';
            });
            
            bgMusic.addEventListener('error', function() {
                console.error('Error loading audio');
                showAudioError();
            });
            
            function showAudioError() {
                audioError.style.display = 'block';
            }
            
            // Handle enter button click
            enterButton.addEventListener('click', function() {
                // Fade out the enter screen
                enterScreen.style.opacity = '0';
                
                // Play the music with improved error handling
                const playPromise = bgMusic.play();
                
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        // Audio started successfully
                        toggleMusic.classList.remove('fa-play');
                        toggleMusic.classList.add('fa-pause');
                    }).catch(error => {
                        console.log('Playback failed, attempting user gesture workaround:', error);
                        // Show instructions to user
                        audioError.innerHTML = '<p class="text-red-400">Audio playback blocked. Click anywhere on the page to start music.</p>';
                        audioError.style.display = 'block';
                        
                        // Set up a one-time click handler to start audio
                        document.addEventListener('click', function resumeAudio() {
                            bgMusic.play().then(() => {
                                toggleMusic.classList.remove('fa-play');
                                toggleMusic.classList.add('fa-pause');
                                audioError.style.display = 'none';
                            }).catch(e => {
                                console.error('Still cannot play audio:', e);
                            });
                            document.removeEventListener('click', resumeAudio);
                        });
                    });
                }
                
                // Show main content after fade out
                setTimeout(function() {
                    enterScreen.style.display = 'none';
                    mainContent.classList.remove('hidden');
                    
                    // Initialize the main website components
                    initStarfield();
                    initShootingStars();
                    animateCounters();
                    
                    // Initialize scroll animations
                    initScrollAnimations();
                    
                    // Check if user is already logged in
                    checkAuthState();
                }, 800);
            });
            
            // Add some floating animation to the enter screen elements
            const enterLogo = document.querySelector('.enter-logo');
            const enterTitle = document.querySelector('.enter-title');
            
            setTimeout(function() {
                enterLogo.style.transition = 'transform 2s ease-in-out';
                enterLogo.style.transform = 'translateY(-10px)';
                
                enterTitle.style.transition = 'transform 2s ease-in-out';
                enterTitle.style.transform = 'scale(1.05)';
            }, 1000);
        });

        // Initialize scroll animations
        function initScrollAnimations() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const fadeObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            fadeElements.forEach(element => {
                fadeObserver.observe(element);
            });
        }

        // Starfield shader background
        function initStarfield() {
            const canvas = document.getElementById('starfield');
            const gl = canvas.getContext('webgl');
            
            if (!gl) {
                console.error('WebGL not supported');
                return;
            }
            
            // Set canvas size
            function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                gl.viewport(0, 0, canvas.width, canvas.height);
            }
            
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            
            // Vertex shader source
            const vsSource = `
                attribute vec2 aPosition;
                void main() {
                    gl_Position = vec4(aPosition, 0.0, 1.0);
                }
            `;
            
            // Fragment shader source (purple starfield)
            const fsSource = `
                precision highp float;
                
                uniform float uTime;
                uniform vec2 uResolution;
                
                // Purple color palette
                vec3 purple1 = vec3(0.54, 0.17, 0.89);
                vec3 purple2 = vec3(0.58, 0.44, 0.86);
                vec3 purple3 = vec3(0.60, 0.20, 0.80);
                
                // Random function
                float random(vec2 st) {
                    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
                }
                
                // Star function
                float star(vec2 uv, float flare) {
                    float d = length(uv);
                    float m = 0.05 / d;
                    
                    // Star rays
                    float rays = max(0.0, 1.0 - abs(uv.x * uv.y * 1000.0));
                    m += rays * flare;
                    
                    // Center glow
                    m *= smoothstep(1.0, 0.2, d);
                    return m;
                }
                
                void main() {
                    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.y, uResolution.x);
                    uv *= 5.0;
                    
                    vec3 color = vec3(0.0);
                    
                    // Background gradient
                    color += mix(vec3(0.05, 0.03, 0.10), vec3(0.08, 0.04, 0.16), length(uv) * 0.2);
                    
                    // Layer 1: Small distant stars
                    vec2 layer1 = floor(uv * 100.0) / 100.0;
                    float star1 = random(layer1);
                    if (star1 > 0.99) {
                        vec2 starUV = fract(uv * 100.0) - 0.5;
                        color += star(starUV, 0.0) * mix(purple1, purple2, random(layer1 + 0.3)) * 0.8;
                    }
                    
                    // Layer 2: Medium stars
                    vec2 layer2 = floor(uv * 50.0) / 50.0;
                    float star2 = random(layer2);
                    if (star2 > 0.98) {
                        vec2 starUV = fract(uv * 50.0) - 0.5;
                        color += star(starUV, 0.3) * mix(purple2, purple3, random(layer2 + 0.5)) * 1.2;
                    }
                    
                    // Layer 3: Large close stars
                    vec2 layer3 = floor(uv * 20.0) / 20.0;
                    float star3 = random(layer3);
                    if (star3 > 0.97) {
                        vec2 starUV = fract(uv * 20.0) - 0.5;
                        color += star(starUV, 0.6) * mix(purple1, purple3, random(layer3 + 0.7)) * 1.5;
                    }
                    
                    // Twinkling effect
                    float twinkle = sin(uTime * (random(uv) + 0.5) * 5.0) * 0.5 + 0.5;
                    color *= 0.8 + 0.4 * twinkle;
                    
                    gl_FragColor = vec4(color, 1.0);
                }
            `;
            
            // Create shader program
            const vertexShader = gl.createShader(gl.VERTEX_SHADER);
            gl.shaderSource(vertexShader, vsSource);
            gl.compileShader(vertexShader);
            
            const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(fragmentShader, fsSource);
            gl.compileShader(fragmentShader);
            
            const shaderProgram = gl.createProgram();
            gl.attachShader(shaderProgram, vertexShader);
            gl.attachShader(shaderProgram, fragmentShader);
            gl.linkProgram(shaderProgram);
            gl.useProgram(shaderProgram);
            
            // Create a rectangle that covers the entire screen
            const positions = new Float32Array([
                -1.0, -1.0,
                1.0, -1.0,
                -1.0, 1.0,
                1.0, 1.0
            ]);
            
            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
            
            const aPosition = gl.getAttribLocation(shaderProgram, 'aPosition');
            gl.enableVertexAttribArray(aPosition);
            gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
            
            // Get uniform locations
            const uTimeLocation = gl.getUniformLocation(shaderProgram, 'uTime');
            const uResolutionLocation = gl.getUniformLocation(shaderProgram, 'uResolution');
            
            // Animation
            let startTime = Date.now();
            
            function animate() {
                const currentTime = (Date.now() - startTime) / 1000;
                
                gl.uniform1f(uTimeLocation, currentTime);
                gl.uniform2f(uResolutionLocation, canvas.width, canvas.height);
                
                gl.clearColor(0.0, 0.0, 0.0, 1.0);
                gl.clear(gl.COLOR_BUFFER_BIT);
                
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                
                requestAnimationFrame(animate);
            }
            
            animate();
        }

        // Improved Shooting stars animation
        function initShootingStars() {
            const canvas = document.getElementById('shooting-stars');
            const ctx = canvas.getContext('2d');
            
            // Set canvas size
            function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            
            // Shooting stars array
            const shootingStars = [];
            const starCount = 5; // Number of shooting stars
            
            // Create shooting stars
            class ShootingStar {
                constructor() {
                    this.reset();
                }
                
                reset() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height * 0.4;
                    this.size = Math.random() * 2 + 1;
                    this.speed = Math.random() * 15 + 8;
                    this.angle = Math.random() * Math.PI / 4 + Math.PI / 8; // 22.5 to 67.5 degrees
                    this.length = Math.random() * 80 + 50;
                    this.active = true;
                    this.opacity = 1;
                    this.trail = [];
                    this.maxTrail = 15;
                    this.hue = Math.random() * 20 + 270; // Purple hues (270-290)
                    this.saturation = Math.random() * 30 + 70; // 70-100%
                }
                
                update() {
                    if (!this.active) return;
                    
                    // Update position
                    this.x += Math.cos(this.angle) * this.speed;
                    this.y += Math.sin(this.angle) * this.speed;
                    
                    // Add to trail
                    this.trail.push({
                        x: this.x, 
                        y: this.y,
                        size: this.size,
                        opacity: this.opacity
                    });
                    
                    if (this.trail.length > this.maxTrail) {
                        this.trail.shift();
                    }
                    
                    // Fade out as it moves
                    this.opacity -= 0.01;
                    
                    // Check if out of screen or faded out
                    if (this.x > canvas.width || this.y > canvas.height || this.opacity <= 0) {
                        this.active = false;
                        setTimeout(() => this.reset(), Math.random() * 5000 + 2000);
                    }
                }
                
                draw() {
                    if (!this.active) return;
                    
                    // Draw trail with gradient
                    for (let i = 0; i < this.trail.length; i++) {
                        const point = this.trail[i];
                        const progress = i / this.trail.length;
                        
                        ctx.beginPath();
                        ctx.arc(point.x, point.y, point.size * progress, 0, Math.PI * 2);
                        
                        // Create gradient from white to purple
                        const gradient = ctx.createRadialGradient(
                            point.x, point.y, 0,
                            point.x, point.y, point.size * progress
                        );
                        
                        gradient.addColorStop(0, `hsla(${this.hue}, ${this.saturation}%, 100%, ${point.opacity})`);
                        gradient.addColorStop(0.5, `hsla(${this.hue}, ${this.saturation}%, 80%, ${point.opacity * 0.7})`);
                        gradient.addColorStop(1, `hsla(${this.hue}, ${this.saturation}%, 60%, 0)`);
                        
                        ctx.fillStyle = gradient;
                        ctx.fill();
                    }
                    
                    // Draw star head with glow
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
                    
                    const gradient = ctx.createRadialGradient(
                        this.x, this.y, 0,
                        this.x, this.y, this.size * 2
                    );
                    
                    gradient.addColorStop(0, `hsla(${this.hue}, ${this.saturation}%, 100%, ${this.opacity})`);
                    gradient.addColorStop(0.7, `hsla(${this.hue}, ${this.saturation}%, 80%, ${this.opacity * 0.5})`);
                    gradient.addColorStop(1, `hsla(${this.hue}, ${this.saturation}%, 70%, 0)`);
                    
                    ctx.fillStyle = gradient;
                    ctx.fill();
                }
            }
            
            // Initialize shooting stars
            for (let i = 0; i < starCount; i++) {
                const star = new ShootingStar();
                // Stagger the initial appearance
                setTimeout(() => {
                    shootingStars.push(star);
                }, i * 1500);
            }
            
            // Animation loop
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Draw a faint background glow
                const gradient = ctx.createRadialGradient(
                    canvas.width / 2, canvas.height / 2, 0,
                    canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
                );
                
                gradient.addColorStop(0, 'hsla(270, 50%, 10%, 0.3)');
                gradient.addColorStop(1, 'hsla(270, 50%, 5%, 0)');
                
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                shootingStars.forEach(star => {
                    star.update();
                    star.draw();
                });
                
                requestAnimationFrame(animate);
            }
            
            animate();
        }
        
        // Animated counters
        function animateCounters() {
            const projects = document.getElementById('projectsCount');
            const clients = document.getElementById('clientsCount');
            const awards = document.getElementById('awardsCount');
            
            const targetProjects = 47;
            const targetClients = 23;
            const targetAwards = 5;
            
            let countProjects = 0;
            let countClients = 0;
            let countAwards = 0;
            
            const interval = setInterval(() {
                if (countProjects < targetProjects) {
                    countProjects++;
                    projects.textContent = countProjects;
                }
                
                if (countClients < targetClients) {
                    countClients++;
                    clients.textContent = countClients;
                }
                
                if (countAwards < targetAwards) {
                    countAwards++;
                    awards.textContent = countAwards;
                }
                
                if (countProjects >= targetProjects && 
                    countClients >= targetClients && 
                    countAwards >= targetAwards) {
                    clearInterval(interval);
                }
            }, 50);
        }
        
        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            // Don't initialize these yet - wait for enter screen
            // initStarfield();
            // initShootingStars();
            // animateCounters();
            
            // Initialize auth functionality
            initAuth();
        });

        // Auth functionality
        function initAuth() {
            const authModal = document.getElementById('auth-modal');
            const authClose = document.getElementById('auth-close');
            const loginButton = document.getElementById('login-button');
            const authToggleBtn = document.getElementById('auth-toggle-btn');
            const authToggleText = document.getElementById('auth-toggle-text');
            const loginForm = document.getElementById('login-form');
            const signupForm = document.getElementById('signup-form');
            const authModalTitle = document.getElementById('auth-modal-title');
            const userMenu = document.getElementById('user-menu');
            const userAvatar = document.getElementById('user-avatar');
            const userDropdown = document.getElementById('user-dropdown');
            const logoutBtn = document.getElementById('logout-btn');
            const authMessage = document.getElementById('auth-message');
            
            let isLogin = true;
            
            // Toggle auth modal
            loginButton.addEventListener('click', () => {
                authModal.classList.add('active');
            });
            
            authClose.addEventListener('click', () => {
                authModal.classList.remove('active');
            });
            
            // Toggle between login and signup
            authToggleBtn.addEventListener('click', () => {
                isLogin = !isLogin;
                
                if (isLogin) {
                    loginForm.style.display = 'flex';
                    signupForm.style.display = 'none';
                    authModalTitle.textContent = 'Login to Your Account';
                    authToggleText.textContent = "Don't have an account? ";
                    authToggleBtn.textContent = "Sign up";
                    document.getElementById('forgot-password').style.display = 'block';
                } else {
                    loginForm.style.display = 'none';
                    signupForm.style.display = 'flex';
                    authModalTitle.textContent = 'Create an Account';
                    authToggleText.textContent = "Already have an account? ";
                    authToggleBtn.textContent = "Sign in";
                    document.getElementById('forgot-password').style.display = 'none';
                }
            });
            
            // Handle login form submission
            loginForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                
                try {
                    const { data, error } = await supabase.auth.signInWithPassword({
                        email,
                        password
                    });
                    
                    if (error) throw error;
                    
                    showMessage('Login successful!', 'success');
                    setTimeout(() => {
                        authModal.classList.remove('active');
                        updateUIAfterAuth(data.user);
                    }, 1500);
                } catch (error) {
                    showMessage(error.message, 'error');
                }
            });
            
            // Handle signup form submission
            signupForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const email = document.getElementById('signup-email').value;
                const password = document.getElementById('signup-password').value;
                const confirmPassword = document.getElementById('confirm-password').value;
                
                if (password !== confirmPassword) {
                    showMessage('Passwords do not match', 'error');
                    return;
                }
                
                try {
                    const { data, error } = await supabase.auth.signUp({
                        email,
                        password
                    });
                    
                    if (error) throw error;
                    
                    showMessage('Account created successfully! Please check your email for verification.', 'success');
                    setTimeout(() => {
                        isLogin = true;
                        loginForm.style.display = 'flex';
                        signupForm.style.display = 'none';
                        authModalTitle.textContent = 'Login to Your Account';
                        authToggleText.textContent = "Don't have an account? ";
                        authToggleBtn.textContent = "Sign up";
                        document.getElementById('forgot-password').style.display = 'block';
                    }, 2000);
                } catch (error) {
                    showMessage(error.message, 'error');
                }
            });
            
            // Handle social auth
            document.getElementById('github-auth').addEventListener('click', () => {
                supabase.auth.signInWithOAuth({
                    provider: 'github',
                });
            });
            
            document.getElementById('google-auth').addEventListener('click', () => {
                supabase.auth.signInWithOAuth({
                    provider: 'google',
                });
            });
            
            document.getElementById('discord-auth').addEventListener('click', () => {
                supabase.auth.signInWithOAuth({
                    provider: 'discord',
                });
            });
            
            // Handle logout
            logoutBtn.addEventListener('click', async () => {
                try {
                    const { error } = await supabase.auth.signOut();
                    if (error) throw error;
                    
                    userMenu.style.display = 'none';
                    loginButton.style.display = 'block';
                    userDropdown.classList.remove('active');
                } catch (error) {
                    console.error('Error signing out:', error.message);
                }
            });
            
            // Toggle user dropdown
            userAvatar.addEventListener('click', () => {
                userDropdown.classList.toggle('active');
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!userMenu.contains(e.target)) {
                    userDropdown.classList.remove('active');
                }
            });
            
            // Show message function
            function showMessage(message, type) {
                authMessage.textContent = message;
                authMessage.className = `auth-message ${type}`;
                authMessage.style.display = 'block';
                
                setTimeout(() => {
                    authMessage.style.display = 'none';
                }, 5000);
            }
        }
        
        // Check auth state
        async function checkAuthState() {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                
                if (session) {
                    updateUIAfterAuth(session.user);
                }
            } catch (error) {
                console.error('Error checking auth state:', error.message);
            }
            
            // Listen for auth changes
            supabase.auth.onAuthStateChange((event, session) => {
                if (event === 'SIGNED_IN' && session) {
                    updateUIAfterAuth(session.user);
                } else if (event === 'SIGNED_OUT') {
                    document.getElementById('user-menu').style.display = 'none';
                    document.getElementById('login-button').style.display = 'block';
                }
            });
        }
        
        // Update UI after authentication
        function updateUIAfterAuth(user) {
            document.getElementById('login-button').style.display = 'none';
            
            const userMenu = document.getElementById('user-menu');
            userMenu.style.display = 'block';
            
            const userName = document.getElementById('user-name');
            const userEmail = document.getElementById('user-email');
            const userInfoAvatar = document.getElementById('user-info-avatar');
            
            // Set user data
            userName.textContent = user.email.split('@')[0];
            userEmail.textContent = user.email;
            userInfoAvatar.innerHTML = user.email.charAt(0).toUpperCase();
            
            // Close auth modal if open
            document.getElementById('auth-modal').classList.remove('active');
        }

        // Other functions (copyEmail, copyDiscord, etc.)
        function copyEmail() {
            const email = "andrrr.discord@gmail.com";
            navigator.clipboard.writeText(email).then(() => {
                const tooltip = document.getElementById("tooltip");
                tooltip.classList.remove("opacity-0");
                tooltip.classList.add("opacity-100");
                
                setTimeout(() => {
                    tooltip.classList.remove("opacity-100");
                    tooltip.classList.add("opacity-0");
                }, 1500);
            }).catch(err => {
                console.error("Failed to copy email: ", err);
            });
        }
        
        function copyDiscord() {
            navigator.clipboard.writeText('._rayzz');
            
            const notification = document.createElement('div');
            notification.className = 'fixed bottom-4 right-4 bg-primary/80 text-white px-4 py-2 rounded-lg shadow-lg glass';
            notification.innerHTML = '<i class="fas fa-check-circle mr-2"></i> Discord username copied to clipboard!';
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }
        
        function toggleQR() {
            const modal = document.getElementById('qrModal');
            modal.classList.toggle('hidden');
        }
    </script>
</body>
</html>
