import json

locales = {
    'en': 'src/locales/en.json',
    'fr': 'src/locales/fr.json',
    'ar': 'src/locales/ar.json',
    'ja': 'src/locales/ja.json',
}

data_to_add = {
    'en': {
        "services": {
            "title": "System Architecture",
            "subtitle": "A comprehensive ecosystem of services driving robust, end-to-end applications.",
            "core": "CORE",
            "systemCore": "SYSTEM CORE",
            "frontendTitle": "Frontend",
            "frontendDesc": "Modern interfaces, responsive UI, component-driven development.",
            "mobileTitle": "Mobile Apps",
            "mobileDesc": "Native-like flows, real-time sync, mobile-first UX.",
            "backendTitle": "Backend",
            "backendDesc": "Scalable APIs, secure auth, robust server logic.",
            "fullstackTitle": "Full-Stack",
            "fullstackDesc": "End-to-end integration, seamless data flow.",
            "dbTitle": "Databases",
            "dbDesc": "Relational schema design, optimized query strategies.",
            "apiTitle": "API Design",
            "apiDesc": "Idempotent endpoints, system decoupling, 3rd party webhooks.",
            "saasTitle": "SaaS Products",
            "saasDesc": "MVP building, multi-tenant architecture, product vision.",
            "optTitle": "Optimization",
            "optDesc": "Performance scaling, reducing tech debt, refactoring."
        }
    },
    'fr': {
        "services": {
            "title": "Architecture Système",
            "subtitle": "Un écosystème complet de services pilotant des applications robustes de bout en bout.",
            "core": "CŒUR",
            "systemCore": "CŒUR SYSTÈME",
            "frontendTitle": "Frontend",
            "frontendDesc": "Interfaces modernes, UI réactive, développement orienté composants.",
            "mobileTitle": "Applications Mobiles",
            "mobileDesc": "Flux natifs, synchronisation en temps réel, UX mobile first.",
            "backendTitle": "Backend",
            "backendDesc": "API évolutives, authentification sécurisée, logique serveur robuste.",
            "fullstackTitle": "Full-Stack",
            "fullstackDesc": "Intégration de bout en bout, flux de données fluide.",
            "dbTitle": "Bases de données",
            "dbDesc": "Conception de schémas relationnels, stratégies de requêtes optimisées.",
            "apiTitle": "Conception d'API",
            "apiDesc": "Endpoints idempotents, découplage de systèmes, webhooks tiers.",
            "saasTitle": "Produits SaaS",
            "saasDesc": "Création de MVP, architecture multi-locataires, vision produit.",
            "optTitle": "Optimisation",
            "optDesc": "Mise à l'échelle des performances, réduction de la dette technique, refactoring."
        }
    },
    'ar': {
        "services": {
            "title": "بنية النظام",
            "subtitle": "نظام بيئي شامل من الخدمات التي تدير تطبيقات قوية ومتكاملة.",
            "core": "الأساس",
            "systemCore": "أساس النظام",
            "frontendTitle": "الواجهة الأمامية",
            "frontendDesc": "واجهات حديثة، تصميم متجاوب، تطوير قائم على المكونات.",
            "mobileTitle": "تطبيقات الهاتف",
            "mobileDesc": "أداء يشبه الأصلي، مزامنة في الوقت الفعلي، تجربة مستخدم تركز على الهاتف.",
            "backendTitle": "الواجهة الخلفية",
            "backendDesc": "واجهات برمجة قابلة للتطوير، مصادقة آمنة، منطق خادم قوي.",
            "fullstackTitle": "تطوير شامل",
            "fullstackDesc": "تكامل من البداية للنهاية، تدفق سلس للبيانات.",
            "dbTitle": "قواعد البيانات",
            "dbDesc": "تصميم مخططات علائقية، استراتيجيات استعلام محسّنة.",
            "apiTitle": "تصميم واجهات برمجة (API)",
            "apiDesc": "نقاط نهاية غير قابلة للتغيير، فصل الأنظمة، خطافات أطراف ثالثة.",
            "saasTitle": "منتجات SaaS",
            "saasDesc": "بناء المنتجات الأولية (MVP)، بنية متعددة المستأجرين، رؤية المنتج.",
            "optTitle": "التحسين",
            "optDesc": "توسيع الأداء، تقليل الديون التقنية، إعادة هيكلة الكود."
        }
    },
    'ja': {
        "services": {
            "title": "システムアーキテクチャ",
            "subtitle": "堅牢でエンドツーエンドのアプリケーションを推進する包括的なサービスエコシステム。",
            "core": "コア",
            "systemCore": "システムコア",
            "frontendTitle": "フロントエンド",
            "frontendDesc": "モダンなインターフェース、レスポンシブUI、コンポーネント駆動開発。",
            "mobileTitle": "モバイルアプリ",
            "mobileDesc": "ネイティブのようなフロー、リアルタイム同期、モバイルファーストなUX。",
            "backendTitle": "バックエンド",
            "backendDesc": "スケーラブルなAPI、安全な認証、堅牢なサーバーロジック。",
            "fullstackTitle": "フルスタック",
            "fullstackDesc": "エンドツーエンドの統合、シームレスなデータフロー。",
            "dbTitle": "データベース",
            "dbDesc": "リレーショナルスキーマ設計、最適化されたクエリ戦略。",
            "apiTitle": "API設計",
            "apiDesc": "べき等なエンドポイント、システムの分離、サードパーティのWebhook。",
            "saasTitle": "SaaS製品",
            "saasDesc": "MVP構築、マルチテナントアーキテクチャ、製品ビジョン。",
            "optTitle": "最適化",
            "optDesc": "パフォーマンスのスケーリング、技術的負債の削減、リファクタリング。"
        }
    }
}

for lang, path in locales.items():
    try:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
            # Try to handle cases where there might be a missing closing brace but usually json is valid
            try:
                data = json.loads(content)
            except json.JSONDecodeError:
                # Append manually if json loading fails
                content = content.strip()
                if content.endswith('}'):
                    content = content[:-1].strip()
                    if content.endswith('}'): # handles last element
                        pass
                pass
            data['services'] = data_to_add[lang]['services']
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print(f"Updated {lang} locale.")
    except Exception as e:
        print(f"Error on {lang}: {e}")
