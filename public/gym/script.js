/* ============================================
   script.js - メインJavaScript
   
   このファイルには以下が含まれます:
   - フッターの年表示
   - ヘッダーのスクロール変化
   - フェードインアニメーション
   - スムーズスクロール
   - フォーム送信処理（必要に応じて追加）
   ============================================ */

// ============================================
// DOMContentLoaded: ページの読み込み完了後に実行
// ============================================
document.addEventListener('DOMContentLoaded', function () {
  
  // ============================================
  // 機能1: フッターの年を自動表示
  // コピーライトの年を現在の年に自動更新
  // ============================================
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ============================================
  // 機能2: モバイルメニューの開閉処理
  // ハンバーガーボタンをクリックするとメニューが開閉します
  // ============================================
  var btn = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  
  if (btn && nav) {
    // メニューボタンクリック時の処理
    btn.addEventListener('click', function (e) {
      e.stopPropagation(); // イベントの伝播を停止
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    });

    // メニュー外をクリックしたらメニューを閉じる
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('open') && 
          !nav.contains(e.target) && 
          !btn.contains(e.target)) {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'メニューを開く');
      }
    });

    // 画面リサイズ時の処理（デスクトップサイズに戻ったらメニューを閉じる）
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768 && nav.classList.contains('open')) {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'メニューを開く');
      }
    });
  }
  
  // ============================================
  // 機能3: ヘッダーのスクロール変化
  // スクロール時にヘッダーに背景色と影を追加
  // ============================================
  var header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', function () {
      // 50px以上スクロールしたら.scrolledクラスを追加
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // ============================================
  // 機能4: フェードインアニメーション
  // IntersectionObserverを使用して、要素が画面に入ったときに
  // .fade-in-upクラスに.visibleクラスを追加
  // ============================================
  var observerOptions = {
    threshold: 0.1  // 要素の10%が表示されたら発火
  };
  
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      // 要素が画面に入ったら.visibleクラスを追加
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // .fade-in-upクラスがついたすべての要素を監視
  document.querySelectorAll('.fade-in-up').forEach(function (el) {
    observer.observe(el);
  });

  // ============================================
  // 機能5: スムーズスクロール
  // ページ内リンク（#で始まるリンク）をクリックしたときに
  // スムーズにスクロールする
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      
      // 空のリンクや#のみの場合は処理をスキップ
      if (!href || href === '#') return;
      
      // リンク先の要素を取得
      var target = document.querySelector(href);
      if (!target) return;
      
      // デフォルトの動作をキャンセル
      e.preventDefault();
      
      // スムーズにスクロール
      target.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // モバイルメニューが開いていれば閉じる
      if (nav && nav.classList.contains('open')) {
        nav.classList.remove('open');
        if (btn) {
          btn.setAttribute('aria-expanded', 'false');
          btn.setAttribute('aria-label', 'メニューを開く');
        }
      }
    });
  });

  // ============================================
  // 機能6: 日付と時間の結合処理
  // フォーム送信時に日付と時間を結合してdatetime形式にする
  // ============================================
  var dateInput = document.getElementById('date');
  var timeInput = document.getElementById('time');
  
  // 日付と時間が変更されたときに、結合した値をhidden inputに保存（オプション）
  // フォーム送信時に使用する場合は、以下のコードを有効化してください
  /*
  function updateDateTime() {
    if (dateInput && timeInput && dateInput.value && timeInput.value) {
      var datetime = dateInput.value + 'T' + timeInput.value;
      console.log('選択された日時:', datetime);
      // 必要に応じてhidden inputに値を設定
    }
  }
  
  if (dateInput && timeInput) {
    dateInput.addEventListener('change', updateDateTime);
    timeInput.addEventListener('change', updateDateTime);
  }
  */

  // ============================================
  // 機能7: フォーム送信処理（オプション）
  // フォーム送信機能を実装する場合は、以下のコードを有効化してください
  // ============================================
  /*
  var trialForm = document.getElementById('trial-form');
  if (trialForm) {
    trialForm.addEventListener('submit', function (e) {
      e.preventDefault(); // デフォルトの送信をキャンセル
      
      // 日付と時間を結合
      var date = document.getElementById('date').value;
      var time = document.getElementById('time').value;
      var datetime = date + 'T' + time;
      
      // フォームデータを取得
      var formData = new FormData(trialForm);
      formData.set('datetime', datetime); // 結合した日時を設定
      
      // ここでフォームデータを送信
      // 例: fetch APIを使用
      // fetch('送信先URL', {
      //   method: 'POST',
      //   body: formData
      // })
      // .then(response => response.json())
      // .then(data => {
      //   alert('送信が完了しました！');
      //   trialForm.reset();
      // })
      // .catch(error => {
      //   alert('エラーが発生しました。もう一度お試しください。');
      // });
      
      // デバッグ用: フォームデータをコンソールに表示
      console.log('フォームデータ:', Object.fromEntries(formData));
      console.log('結合された日時:', datetime);
    });
  }
  */

});
